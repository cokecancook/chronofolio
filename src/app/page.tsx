import { PortfolioTimeline } from '@/app/components/portfolio-timeline'
import { portfolioData, portfolioCategories } from '@/app/lib/portfolio-data'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">
        <div className="w-full max-w-7xl mx-auto">
          <header className="text-center mb-12 md:mb-24">
            <h1 className="text-3xl md:text-7xl font-extrabold font-headline tracking-tighter text-foreground">
              ChronoFolio
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              Haz scroll para explorar mis proyectos pasados
            </p>
            <a href="https://cokestuyck.webflow.io" className="text-sm underline md:text-md max-w-3xl mx-auto mt-4">
              Visita mi portfolio actual
            </a>
          </header>

          <PortfolioTimeline projects={portfolioData} categories={portfolioCategories} />

        </div>
      </main>
      <footer className="w-full max-w-7xl mx-auto text-center py-8 px-4 border-t">
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Coke Stuyck. Hecho con ❤️ en Valencia.</p>
      </footer>
    </div>
  );
}
