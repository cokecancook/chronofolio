import type { Metadata } from 'next';
import { Tourney } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const tourney = Tourney({
	subsets: ['latin'],
	variable: '--font-tourney',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'ChronoFolio',
	description: 'A timeline portfolio.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`scroll-smooth ${tourney.variable}`}
		>
			<head>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Sixtyfour&family=Victor+Mono:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="font-body antialiased">
				{children}
				<Toaster />
			</body>
		</html>
	);
}
