'use client';

import Image from 'next/image';
import { type PortfolioItem } from '@/app/lib/portfolio-data';
import { cn } from '@/lib/utils';
import { forwardRef, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

interface PortfolioCardProps {
	project: PortfolioItem;
	index: number;
	indexInGroup: number;
	isActive: boolean;
	isMobile: boolean | undefined;
	showYearMarker: boolean;
	isLastYear?: boolean;
	onClick: (project: PortfolioItem) => void;
	onMouseEnter: (id: string) => void;
	onMouseLeave: () => void;
}

export const PortfolioCard = forwardRef<HTMLDivElement, PortfolioCardProps>(
	(
		{
			project,
			index,
			indexInGroup,
			isActive,
			isMobile,
			showYearMarker,
			isLastYear,
			onClick,
			onMouseEnter,
			onMouseLeave,
		},
		ref
	) => {
		const targetRef = useRef<HTMLDivElement>(null);
		const [isLoaded, setIsLoaded] = useState(false);

		const { scrollYProgress } = useScroll({
			target: targetRef,
			offset: ['start end', 'end start'],
		});

		// Images scale up from the bottom but stay full size at the top
		// Exclude first item (index === 0) from scroll effects
		const isFirst = index === 0;

		const scale = useTransform(
			scrollYProgress,
			[0, 0.25],
			isFirst ? [1, 1] : [0.85, 1]
		);
		const opacity = useTransform(
			scrollYProgress,
			[0, 0.2],
			isFirst ? [1, 1] : [0, 1]
		);
		const y = useTransform(
			scrollYProgress,
			[0, 0.25],
			isFirst ? [0, 0] : [5, 0]
		);

		// Slide from sides only on entry
		const xValue =
			isMobile === undefined || isMobile ? 0 : index % 2 === 0 ? -60 : 60;
		const x = useTransform(
			scrollYProgress,
			[0, 0.15],
			isFirst ? [0, 0] : [xValue, 0]
		);

		// Rotation only on entry
		const rotateValue =
			isMobile === undefined || isMobile ? 0 : index % 2 === 0 ? -10 : 10;
		const rotate = useTransform(
			scrollYProgress,
			[0, 0.15],
			isFirst ? [0, 0] : [rotateValue, 0]
		);

		return (
			<div
				ref={(el) => {
					// Support both the forwarded ref and our local scroll target
					if (typeof ref === 'function') ref(el);
					else if (ref) ref.current = el;
					(targetRef as any).current = el;
				}}
				data-project-id={project.id}
				className={cn(
					'portfolio-card relative mb-12 desktop:mb-24',
					'w-full desktop:w-1/2',
					isMobile && !isLastYear && 'sticky',
					index % 2 === 0
						? 'desktop:pr-12 desktop:mr-auto'
						: 'desktop:pl-12 desktop:ml-auto'
				)}
				style={
					isMobile && !isLastYear
						? {
								top: `${80 + indexInGroup * 20}px`,
								zIndex: indexInGroup,
						  }
						: {}
				}
			>
				{showYearMarker && isMobile === false && (
					<div
						className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
						style={{
							right: index % 2 === 0 ? '0' : 'auto',
							left: index % 2 === 0 ? 'auto' : '0',
							transform: `translateX(${
								index % 2 === 0 ? '50%' : '-50%'
							})`,
						}}
					>
						<span className="text-xs font-headline tracking-tighter whitespace-nowrap bg-background px-2 py-0.5 rounded-full border border-border/50">
							{project.year}
						</span>
						<div
							className={cn(
								'w-4 h-4 rounded-full bg-background border-2 border-primary transition-colors duration-300 relative z-10',
								isActive && 'bg-primary'
							)}
						>
							{isActive && (
								<motion.div
									layoutId="active-dot-glow"
									className="absolute inset-0 rounded-full bg-primary/40 animate-ping"
								/>
							)}
						</div>
					</div>
				)}

				{/* Image: Scaled down and scaled up with scroll (except first item) */}
				<motion.div
					style={{
						scale,
						opacity,
						x,
						y,
						rotate,
					}}
					className="relative cursor-pointer group"
					onClick={() => onClick(project)}
					onMouseEnter={() => onMouseEnter(project.id)}
					onMouseLeave={() => onMouseLeave()}
				>
					<div
						className={cn(
							'relative overflow-hidden shadow-2xl rounded-lg transition-transform duration-500 bg-muted'
						)}
					>
						{!isLoaded && (
							<Skeleton className="absolute inset-0 z-10" />
						)}
						<Image
							src={project.mainImage.src}
							width={project.mainImage.width}
							height={project.mainImage.height}
							alt={project.title}
							data-ai-hint={project.mainImage.hint}
							onLoad={() => setIsLoaded(true)}
							className={cn(
								'w-full h-auto transition-all duration-700',
								!isLoaded
									? 'opacity-0 invisible'
									: 'opacity-100 visible'
							)}
						/>
						<div
							className={cn(
								'absolute inset-0 bg-black/70 backdrop-blur-[2px] flex flex-col justify-center items-center text-center p-6 transition-opacity duration-300',
								!isActive && 'opacity-0'
							)}
						>
							<h3 className="text-2xl md:text-3xl font-headline tracking-tighter font-bold text-white mb-2">
								{project.title}
							</h3>
							<p className="text-lg text-gray-200">
								{project.subtitle}
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		);
	}
);

PortfolioCard.displayName = 'PortfolioCard';
