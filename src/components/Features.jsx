function Features({product}) {
	const featuresText = product.features.split("\n\n")

	return (
		<div className="mx-4 md:mx-8 xl:w-[60%]">
			<h3 className="mb-6 text-2xl font-bold uppercase md:text-3xl">
				features
			</h3>
			{featuresText.map((text, i) => (
				<p key={i} className="text-[15px] opacity-50 mb-4">
					{text}
				</p>
			))}
		</div>
	)
}

export default Features
