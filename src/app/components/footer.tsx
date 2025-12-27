export function Footer() {
	return (
		<footer
			id="pasado"
			className="w-full bg-background"
		>
			<div className="max-w-7xl desktop:max-w-screen-2xl mx-auto pt-12 px-4 md:px-8">
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					<p className="text-sm text-muted-foreground text-center mx-auto pb-0 sm:pb-8">
						{/* Coke Stuyck &copy; {new Date().getFullYear()}
						<br /> */}
						Hecho con ❤️ en Valencia.
					</p>
					{/* <div className="flex items-center gap-6 order-1 md:order-2">
						<a
							href="https://cokestuyck.webflow.io"
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							Portfolio Actual
						</a>
						<a
							href="mailto:cokecancook@gmail.com"
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							Contacto
						</a>
					</div> */}
				</div>
			</div>
		</footer>
	);
}
