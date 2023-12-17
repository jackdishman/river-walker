"use client";

import React from "react";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

export default function ImageGallery() {
	return (
		<div>
			<Carousel className="w-96 h-96 rounded-xl">
				<Image src="/gallery/1.webp" objectFit="cover" fill={true} alt="test" />
				<Image src="/gallery/2.webp" objectFit="cover" fill={true} alt="test" />
				<Image src="/gallery/3.webp" objectFit="cover" fill={true} alt="test" />
				<Image src="/gallery/4.webp" objectFit="cover" fill={true} alt="test" />
				<Image src="/gallery/5.webp" objectFit="cover" fill={true} alt="test" />
				<Image src="/gallery/6.webp" objectFit="cover" fill={true} alt="test" />
				<Image src="/gallery/7.webp" objectFit="cover" fill={true} alt="test" />
				<Image src="/gallery/8.webp" objectFit="cover" fill={true} alt="test" />
				<Image src="/gallery/9.webp" objectFit="cover" fill={true} alt="test" />
				<Image
					src="/gallery/10.webp"
					objectFit="cover"
					fill={true}
					alt="test"
				/>
				<Image
					src="/gallery/11.webp"
					objectFit="cover"
					fill={true}
					alt="test"
				/>
			</Carousel>
		</div>
	);
}
