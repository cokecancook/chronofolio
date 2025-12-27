'use client';

import { useState, useEffect } from 'react';
import { Subheading } from './subheading';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export function Hero() {
	const [isBlack, setIsBlack] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsBlack(true);
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	const toggleWeight = () => {
		setIsBlack(!isBlack);
	};

	return (
		<div className="text-center pt-8 pb-4 sm:pt-12 sm:pb-6 px-4">
			<div className="inline-flex flex-col items-stretch group max-w-full">
				<a href="/">
					<h1
						onMouseEnter={toggleWeight}
						onMouseLeave={toggleWeight}
						className={`uppercase text-center text-[14vw] md:text-8xl lg:text-9xl tracking-tighter font-tourney text-foreground cursor-pointer select-none transition-all duration-700 ease-in-out h-[15vw] sm:h-[14vw] md:h-[96px] lg:h-[128px] flex items-center justify-center ${
							isBlack ? 'font-[900]' : 'font-[150]'
						}`}
					>
						ChronoFolio
					</h1>
				</a>
				<div className="flex flex-row justify-between items-start -mt-1 sm:-mt-2">
					<Subheading className="text-left w-auto pl-1 md:pl-2">
						Un recorrido <br className="sm:hidden" /> del{' '}
						<a
							href="#presente"
							className="underline underline-offset-2 hover:text-primary transition-colors cursor-pointer"
							onClick={(e) => {
								e.preventDefault();
								window.scrollTo({ top: 0, behavior: 'smooth' });
							}}
						>
							presente
						</a>{' '}
						<br className="sm:hidden" /> al{' '}
						<a
							href="#pasado"
							className="underline underline-offset-2 hover:text-primary transition-colors cursor-pointer"
							onClick={(e) => {
								e.preventDefault();
								document
									.getElementById('pasado')
									?.scrollIntoView({
										behavior: 'smooth',
										block: 'end',
									});
							}}
						>
							pasado
						</a>
						.
					</Subheading>
					<div className="flex justify-end">
						<Subheading href="https://cokestuyck.webflow.io">
							Portfolio Oficial
						</Subheading>
					</div>
				</div>
			</div>
		</div>
	);
}
