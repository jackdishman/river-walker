import React from "react";
import Link from "next/link";

export default function TopHeader() {
	return (
		<div>
			<header className="fixed top-0 w-full z-20 bg-blue-200 h-16 flex items-center gap-8 justify-center text-lg">
				<Link href={`/`}>Home</Link>
				<Link href={`/about-river`}>About River</Link>
				<Link href={`/about-medulloblastoma`}>About Medulloblastoma</Link>
				<Link href={`/fundraising`}>Fundraising Goals</Link>
				<a
					href="https://www.gofundme.com/f/hope-for-river-a-journey-against-medulloblastoma"
					target="_blank"
					referrerPolicy="no-referrer">
					Donate (GoFundMe)
				</a>
				<Link href={`/updates`}>Updates</Link>
				<Link href={`/contact`}>Contact</Link>
			</header>
		</div>
	);
}
