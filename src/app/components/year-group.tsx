'use client';

import { PortfolioItem } from '@/app/lib/portfolio-data';
import { PortfolioCard } from './portfolio-card';
import { cn } from '@/lib/utils';

interface YearGroupProps {
	year: string;
	projects: PortfolioItem[];
	globalStartIndex: number;
	isMobile: boolean | undefined;
	isLastYearGroup: boolean;
	activeCardId: string | null;
	cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
	onProjectClick: (project: PortfolioItem) => void;
	onMouseEnter: (id: string) => void;
	onMouseLeave: () => void;
}

export function YearGroup({
	year,
	projects,
	globalStartIndex,
	isMobile,
	isLastYearGroup,
	activeCardId,
	cardRefs,
	onProjectClick,
	onMouseEnter,
	onMouseLeave,
}: YearGroupProps) {
	return (
		<div
			className={cn(
				'year-group relative mb-24 desktop:mb-0',
				isMobile && isLastYearGroup && 'pt-20'
			)}
		>
			<div
				className={cn(
					'left-0 z-30 pointer-events-none px-4 translate-y-[-12px] desktop:hidden',
					isLastYearGroup ? 'absolute top-20' : 'sticky top-20 h-0'
				)}
			>
				<span className="text-xs font-headline tracking-tighter whitespace-nowrap bg-background px-2 py-0.5 rounded-full border border-border/50 inline-block shadow-sm">
					{year}
				</span>
			</div>
			{projects.map((project, indexInGroup) => {
				const currentIndex = globalStartIndex + indexInGroup;
				const showYearMarker = indexInGroup === projects.length - 1;
				return (
					<PortfolioCard
						key={project.id}
						ref={(el) => {
							cardRefs.current[currentIndex] = el;
						}}
						project={project}
						index={currentIndex}
						indexInGroup={indexInGroup}
						isActive={project.id === activeCardId}
						isMobile={isMobile}
						showYearMarker={showYearMarker}
						isLastYear={isLastYearGroup}
						onClick={onProjectClick}
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
					/>
				);
			})}
		</div>
	);
}
