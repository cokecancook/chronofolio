'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineFiltersProps {
	categories: string[];
	activeFilter: string;
	onFilterClick: (category: string) => void;
	isMobile: boolean | undefined;
	filtersExpanded: boolean;
	setFiltersExpanded: (expanded: boolean) => void;
}

export function TimelineFilters({
	categories,
	activeFilter,
	onFilterClick,
	isMobile,
	filtersExpanded,
	setFiltersExpanded,
}: TimelineFiltersProps) {
	return (
		<>
			<AnimatePresence>
				{isMobile === true && filtersExpanded && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setFiltersExpanded(false)}
						className="fixed inset-0 bg-background/60 backdrop-blur-md z-[35]"
					/>
				)}
			</AnimatePresence>

			<div
				className={cn(
					'relative w-full py-4',
					filtersExpanded && 'z-[50]'
				)}
				data-testid="timeline-filters"
			>
				<div className="flex justify-center flex-wrap gap-1.5">
					<AnimatePresence
						mode="popLayout"
						initial={false}
					>
						{categories
							.filter(
								(category) =>
									isMobile === false ||
									filtersExpanded ||
									category === activeFilter
							)
							.map((category) => (
								<motion.div
									key={category}
									layout
									initial={
										isMobile === undefined
											? false
											: { opacity: 0, scale: 0.8 }
									}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.8 }}
									transition={{
										type: 'spring',
										stiffness: 500,
										damping: 30,
										mass: 1,
									}}
									className={cn(
										isMobile && !filtersExpanded && 'z-10'
									)}
								>
									<Button
										variant={
											activeFilter === category
												? 'default'
												: 'outline'
										}
										onClick={() => onFilterClick(category)}
										className={cn(
											'rounded-full h-8 px-4 text-xs transition-all duration-300 border border-primary/30 shadow-none',
											'hover:border-primary hover:shadow-none',
											activeFilter === category &&
												'border-primary'
										)}
									>
										{category}
										{(isMobile === undefined || isMobile) &&
											!filtersExpanded &&
											category === activeFilter && (
												<ChevronDown className="ml-2 h-3 w-3 opacity-50" />
											)}
									</Button>
								</motion.div>
							))}
					</AnimatePresence>
				</div>
			</div>
		</>
	);
}
