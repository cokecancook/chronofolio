'use client';

import { useState, useEffect, useRef } from 'react';
import { Hero } from './hero';
import { TimelineFilters } from './timeline-filters';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface MainHeaderProps {
	categories: string[];
}

export function MainHeader({ categories }: MainHeaderProps) {
	const [isVisible, setIsVisible] = useState(true);
	const [isScrolled, setIsScrolled] = useState(false);
	const [heroHeight, setHeroHeight] = useState(0);
	const heroRef = useRef<HTMLDivElement>(null);
	const { scrollY } = useScroll();

	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();
	const isMobile = useIsMobile();

	const [filtersExpanded, setFiltersExpanded] = useState(false);
	const activeFilter = searchParams.get('category') || 'Todos';

	const scrollUpTimerRef = useRef<NodeJS.Timeout | null>(null);
	const scrollStartRef = useRef<number | null>(null);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const previous = scrollY.getPrevious() ?? 0;
		const delta = latest - previous;

		// Scrolling down
		if (delta > 0 && latest > 150) {
			// Clear any pending timers
			if (scrollUpTimerRef.current) {
				clearTimeout(scrollUpTimerRef.current);
				scrollUpTimerRef.current = null;
			}
			scrollStartRef.current = null;

			// Hide header immediately
			setIsVisible(false);

			// Delay background removal until after slide animation (400ms)
			setTimeout(() => {
				// Only remove background if still scrolled and still hidden
				if (scrollY.get() > 150 && !isVisible) {
					setIsScrolled(false);
				}
			}, 400);
		}
		// Scrolling up
		else if (delta < 0 && latest > 50) {
			// Track scroll start position for distance calculation
			if (scrollStartRef.current === null) {
				scrollStartRef.current = latest;
			}

			// Clear existing timer
			if (scrollUpTimerRef.current) {
				clearTimeout(scrollUpTimerRef.current);
			}

			// Debounce: wait for continuous upward scroll
			scrollUpTimerRef.current = setTimeout(() => {
				const scrolledUp = (scrollStartRef.current ?? latest) - latest;
				// Require at least 30px of upward scroll
				if (scrolledUp >= 30) {
					setIsScrolled(true); // Show background first
					setIsVisible(true); // Then reveal header
					scrollStartRef.current = null;
				}
			}, 100);
		}

		// At the very top - reset everything
		if (latest <= 10) {
			if (scrollUpTimerRef.current) {
				clearTimeout(scrollUpTimerRef.current);
				scrollUpTimerRef.current = null;
			}
			scrollStartRef.current = null;
			setIsVisible(true);
			setIsScrolled(false);
		}
	});

	useEffect(() => {
		if (heroRef.current) {
			setHeroHeight(heroRef.current.offsetHeight);
		}
	}, []);

	// Re-measure on resize
	useEffect(() => {
		const handleResize = () => {
			if (heroRef.current) {
				setHeroHeight(heroRef.current.offsetHeight);
			}
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleFilterClick = (category: string) => {
		if (isMobile === true) {
			if (!filtersExpanded) {
				setFiltersExpanded(true);
			} else {
				updateFilter(category);
				setFiltersExpanded(false);
			}
		} else {
			updateFilter(category);
		}
	};

	useEffect(() => {
		if (isMobile === true && filtersExpanded) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [isMobile, filtersExpanded]);

	const updateFilter = (category: string) => {
		const params = new URLSearchParams(searchParams.toString());
		if (category === 'Todos') {
			params.delete('category');
		} else {
			params.set('category', category);
		}
		router.push(`${pathname}?${params.toString()}`, { scroll: false });
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<>
			{/* Hero Header - slides in/out based on scroll direction */}
			<motion.div
				initial={false}
				animate={{
					y: isVisible ? 0 : -heroHeight,
				}}
				transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
				className={cn(
					'fixed top-0 left-0 right-0 z-[101] w-full transition-all duration-300',
					isScrolled && isVisible
						? 'bg-background/90 backdrop-blur-sm shadow-sm'
						: 'bg-transparent'
				)}
			>
				<div className="w-full max-w-7xl desktop:max-w-screen-2xl mx-auto">
					<div ref={heroRef}>
						<Hero />
					</div>
				</div>
			</motion.div>

			{/* Filters - always sticky, positioned below header when visible */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.3 }}
				className="sticky z-[100] w-full"
				style={{
					top: isVisible ? `${heroHeight}px` : '0px',
					transition: 'top 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
				}}
			>
				<div className="w-full max-w-7xl desktop:max-w-screen-2xl mx-auto">
					<TimelineFilters
						categories={categories}
						activeFilter={activeFilter}
						onFilterClick={handleFilterClick}
						isMobile={isMobile}
						filtersExpanded={filtersExpanded}
						setFiltersExpanded={setFiltersExpanded}
					/>
				</div>
			</motion.div>

			{/* Spacer to prevent content jump */}
			<div style={{ height: `${heroHeight}px` }} />
		</>
	);
}
