export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between">
			{/* title */}
			<div
				className="bg-cover bg-center h-screen w-full relative"
				style={{ backgroundImage: `url('/cover.png')` }}>
				<h1 className="absolute top-0 text-5xl text-center w-full font-bold text-white mt-24 lg:mt-4">
					River&apos;s Hope
				</h1>
				<p className="absolute bottom-0 text-center w-full text-4xl text-white mb-24">
					Navigating Medulloblastoma Cancer
				</p>
				<div className="flex items-between text-center justify-center h-full">
					<div className="text-white text-center"></div>
				</div>
			</div>
			{/* intro */}
			<div className="flex justify-center px-5 py-10">
				<p className="text-2xl text-center w-full sm:w-3/4 lg:w-1/2">
					River Walker is an adorable and lively 2-year-old toddler facing a
					life-threatening battle against Medulloblastoma, a rare and aggressive
					form of brain and spinal cord cancer.
				</p>
			</div>
		</main>
	);
}
