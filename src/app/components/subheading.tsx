'use client';

import React from 'react';

interface SubheadingProps {
	children: React.ReactNode;
	href?: string;
	className?: string;
}

export function Subheading({
	children,
	href,
	className = '',
}: SubheadingProps) {
	const baseStyles =
		'text-xs sm:text-sm lg:text-[16px] font-medium transition-colors duration-300';

	if (href) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={`${baseStyles} text-primary/40 hover:text-primary hover:underline underline-offset-4 inline-flex items-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
			>
				{children}
				<svg
					className="ml-1.5 w-4 h-4 shrink-0"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
					/>
				</svg>
			</a>
		);
	}

	return (
		<p className={`${baseStyles} text-primary ${className}`}>{children}</p>
	);
}
