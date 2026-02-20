'use client';

import type { PortfolioItem } from '@/app/lib/portfolio-data';
import { useState, useMemo, useRef, useEffect } from 'react';
import { ProjectModal } from './project-modal';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useSearchParams } from 'next/navigation';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { YearGroup } from './year-group';

interface PortfolioTimelineProps {
	projects: PortfolioItem[];
	categories: string[];
	initialProjectId?: string;
}

export function PortfolioTimeline({
	projects,
	categories,
	initialProjectId,
}: PortfolioTimelineProps) {
	const searchParams = useSearchParams();

	const activeFilter = searchParams.get('category') || 'Todos';
	const [selectedProject, setSelectedProject] =
		useState<PortfolioItem | null>(() =>
			initialProjectId
				? projects.find((p) => p.id === initialProjectId) ?? null
				: null,
		);
	const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

	const isMobile = useIsMobile();

	const timelineRef = useRef<HTMLDivElement>(null);
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

	const filteredProjects = useMemo(() => {
		if (activeFilter === 'Todos') {
			return projects;
		}
		return projects.filter((p) => p.categories.includes(activeFilter));
	}, [activeFilter, projects]);

	const { scrollYProgress } = useScroll({
		target: timelineRef,
		offset: ['start 30%', 'end center'],
	});

	const heightPercent = useSpring(
		useTransform(scrollYProgress, [0, 1], [100, 0]),
		{
			stiffness: 100,
			damping: 30,
			restDelta: 0.001,
		},
	);

	const height = useTransform(heightPercent, (v) => `${v}%`);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible');
					}
				});
			},
			{ threshold: 0.1 },
		);

		const elements = cardRefs.current;
		elements.forEach((el) => {
			if (el) observer.observe(el);
		});

		return () => {
			elements.forEach((el) => {
				if (el) observer.unobserve(el);
			});
		};
	}, [filteredProjects]);

	const groupedProjects = useMemo(() => {
		const groups: {
			year: string;
			projects: PortfolioItem[];
		}[] = [];
		filteredProjects.forEach((project) => {
			const lastGroup = groups[groups.length - 1];
			if (lastGroup && lastGroup.year === project.year) {
				lastGroup.projects.push(project);
			} else {
				groups.push({
					year: project.year,
					projects: [project],
				});
			}
		});
		return groups;
	}, [filteredProjects]);

	const handleProjectOpen = (project: PortfolioItem) => {
		setSelectedProject(project);
		window.history.pushState(null, '', `/${project.id}`);
	};

	const handleProjectClose = () => {
		setSelectedProject(null);
		window.history.pushState(null, '', '/');
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, delay: 0.4 }}
			className={cn('min-h-screen relative px-4', !isMobile && 'md:px-0')}
		>
			<div
				ref={timelineRef}
				className="relative w-full max-w-5xl xl:max-w-[1200px] 2xl:max-w-[1600px] mx-auto"
				onMouseLeave={() => setHoveredCardId(null)}
			>
				<div
					className="absolute left-1/2 top-0 h-full w-px bg-border/20 -translate-x-1/2 hidden desktop:block"
					aria-hidden="true"
				/>
				<motion.div
					style={{ height }}
					className="absolute left-1/2 -ml-[1px] bottom-0 w-[2px] bg-primary -translate-x-1/2 will-change-transform hidden desktop:block min-h-[264px]"
					aria-hidden="true"
				/>

				{(() => {
					let globalIndex = 0;
					return groupedProjects.map((group, groupIndex) => {
						const isLastYearGroup =
							groupIndex === groupedProjects.length - 1;
						const startIndex = globalIndex;
						globalIndex += group.projects.length;

						return (
							<YearGroup
								key={group.year}
								year={group.year}
								projects={group.projects}
								globalStartIndex={startIndex}
								isMobile={isMobile}
								isLastYearGroup={isLastYearGroup}
								activeCardId={hoveredCardId}
								cardRefs={cardRefs}
								onProjectClick={handleProjectOpen}
								onMouseEnter={setHoveredCardId}
								onMouseLeave={() => setHoveredCardId(null)}
							/>
						);
					});
				})()}
			</div>

			<ProjectModal
				project={selectedProject}
				onClose={handleProjectClose}
			/>
		</motion.section>
	);
}
