import { Suspense } from 'react';
import { PortfolioTimeline } from '@/app/components/portfolio-timeline';
import { portfolioData, portfolioCategories } from '@/app/lib/portfolio-data';
import { MainHeader } from '@/app/components/main-header';
import { SecondaryCta } from '@/app/components/secondary-cta';
import { Footer } from '@/app/components/footer';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
	params: Promise<{ projectId: string }>;
}

export async function generateStaticParams() {
	return portfolioData.map((project) => ({
		projectId: project.id,
	}));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { projectId } = await params;
	const project = portfolioData.find((p) => p.id === projectId);

	if (!project) {
		notFound();
	}

	return (
		<div className="flex flex-col min-h-screen bg-background selection:bg-primary/10 selection:text-primary">
			<main className="flex-grow flex flex-col">
				<Suspense fallback={<div style={{ height: '100vh' }} />}>
					<MainHeader categories={portfolioCategories} />
				</Suspense>
				<div className="w-full max-w-7xl desktop:max-w-screen-2xl mx-auto">
					<Suspense fallback={<div className="min-h-screen" />}>
						<PortfolioTimeline
							projects={portfolioData}
							categories={portfolioCategories}
							initialProjectId={projectId}
						/>
					</Suspense>

					<SecondaryCta />
				</div>
			</main>
			<Footer />
		</div>
	);
}
