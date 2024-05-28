function ProductSummary({name, desc, imgUrl, isNew = false}) {
	return (
		<div className="flex flex-col items-center justify-center mx-6 text-center max-w-[380px] xl:text-left xl:mx-0 xl:max-w-[420px]  xl:items-start">
			{imgUrl && <img src={imgUrl} alt={name} />}
			{isNew && (
				<p className="tracking-[10px] opacity-50 text-sm uppercase mb-4">
					new product
				</p>
			)}
			<h3 className="text-4xl font-[600] tracking-wider uppercase md:text-[56px] md:leading-[3.5rem]">
				{name}
			</h3>
			<p className="my-6 font-light opacity-75 xl:max-w-[380px] text-center">
				{desc}
			</p>
		</div>
	)
}

export default ProductSummary
