'use client';

import type { PortfolioItem } from '@/app/lib/portfolio-data';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from '@/components/ui/dialog';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { useState, useRef } from 'react';
import { Link, Check } from 'lucide-react';

interface ProjectModalProps {
	project: PortfolioItem | null;
	onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
	const [copied, setCopied] = useState(false);
	const dialogRef = useRef<HTMLDivElement>(null);

	const handleCopyLink = () => {
		if (!project) return;
		const url = `${window.location.origin}/${project.id}`;
		const confirm = () => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		};
		const execFallback = () => {
			try {
				const ta = document.createElement('textarea');
				ta.value = url;
				ta.style.cssText =
					'position:fixed;top:0;left:0;width:2em;height:2em;padding:0;border:none;outline:none;background:transparent;font-size:16px;';
				// Append inside the dialog so it's within the focus trap
				const container = dialogRef.current ?? document.body;
				container.appendChild(ta);
				ta.focus();
				ta.select();
				ta.setSelectionRange(0, 99999);
				document.execCommand('copy');
				container.removeChild(ta);
			} catch {}
			confirm();
		};
		if (navigator?.clipboard?.writeText) {
			navigator.clipboard
				.writeText(url)
				.then(confirm)
				.catch(execFallback);
		} else {
			execFallback();
		}
	};
	if (!project) {
		return null;
	}

	return (
		<Dialog
			open={!!project}
			onOpenChange={(isOpen) => !isOpen && onClose()}
		>
			<DialogContent
				ref={dialogRef}
				className="max-w-[95vw] h-[95svh] p-0 gap-0 flex flex-col"
				onOpenAutoFocus={(e) => e.preventDefault()}
			>
				<div className="h-32 px-6 pt-6 shrink-0 border-b-[1px] border-black">
					<DialogHeader>
						<DialogTitle className="text-5xl font-black uppercase font-tourney">
							{project.title}
						</DialogTitle>
						<div className="flex items-center gap-4 pt-2">
							<div className="flex gap-2 flex-wrap">
								{project.categories.map((category, index) => (
									<Badge
										key={index}
										className="text-xs border-black"
										variant="secondary"
									>
										{category}
									</Badge>
								))}
							</div>
							<span className="text-xs font-headline tracking-tighter mt-1">
								{project.year}
							</span>
							<button
								onClick={handleCopyLink}
								title="Copy link"
								className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
							>
								{copied ? (
									<>
										<Check className="w-3.5 h-3.5" /> URL
										Copiada!
									</>
								) : (
									<>
										<Link className="w-3.5 h-3.5" />{' '}
										Compartir
									</>
								)}
							</button>
						</div>
					</DialogHeader>
				</div>
				<div className="flex flex-col gap-8 px-6 pb-6 overflow-y-auto flex-1">
					{/* Desktop: Carousel */}
					<div className="hidden md:block w-full">
						<Carousel
							className="w-full"
							opts={{
								align: 'start',
								containScroll: 'trimSnaps',
							}}
						>
							<CarouselContent className="-ml-4">
								{[project.mainImage, ...project.gallery].map(
									(image, index) => (
										<CarouselItem
											key={index}
											className="pl-4 basis-[80%]"
										>
											<div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-xl border-[1px] border-black/80">
												<Image
													src={image.src}
													alt={`${
														project.title
													} - image ${index + 1}`}
													fill
													className="object-cover"
													data-ai-hint={image.hint}
													sizes="80vw"
												/>
											</div>
										</CarouselItem>
									),
								)}
							</CarouselContent>
							<CarouselPrevious className="left-2 border-none" />
							<CarouselNext className="right-2 border-none" />
						</Carousel>
					</div>

					{/* Mobile: vertical 1-col grid */}
					<div className="flex flex-col gap-4 pt-6 md:hidden">
						{[project.mainImage, ...project.gallery].map(
							(image, index) => (
								<div
									key={index}
									className="w-full overflow-hidden rounded-lg shadow-xl border-[1px] border-black/80"
								>
									<Image
										src={image.src}
										alt={`${project.title} - image ${
											index + 1
										}`}
										width={1920}
										height={1080}
										data-ai-hint={image.hint}
										sizes="95vw"
										style={{
											width: '100%',
											height: 'auto',
											objectFit: 'contain',
										}}
									/>
								</div>
							),
						)}
					</div>
					<DialogDescription className="text-base leading-relaxed text-foreground/80 max-w-3xl">
						{project.description}
					</DialogDescription>
					{project.link && (
						<div className="text-center mt-4">
							<a
								href={project.link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center text-primary hover:underline"
							>
								{project.link.name} →
							</a>
						</div>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
}
