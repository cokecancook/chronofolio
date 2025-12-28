import { Suspense } from 'react';
import { PortfolioTimeline } from '@/app/components/portfolio-timeline';
import { portfolioData, portfolioCategories } from '@/app/lib/portfolio-data';
import { MainHeader } from '@/app/components/main-header';
import { SecondaryCta } from '@/app/components/secondary-cta';
import { Footer } from '@/app/components/footer';

export default function Home() {
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
						/>
					</Suspense>

					<SecondaryCta />
				</div>
			</main>
			<Footer />
		</div>
	);
}
