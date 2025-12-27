export function SecondaryCta() {
	return (
		<section className="text-center py-24 px-4 border-t border-border/40">
			<h2 className="text-5xl md:text-6xl max-w-2xl mx-auto xl:max-w-3xl font-black font-tourney tracking-tighter mb-4">
				¿Hablamos?
			</h2>
			<p className="text-muted-foreground max-w-[260px] mx-auto mb-8">
				Agenda una reunión y hablemos de tu proyecto.
			</p>
			<a
				href="https://calendly.com/coke-stuyck/30min"
				target="_blank"
				className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
			>
				Ver Calendario
			</a>
		</section>
	);
}
