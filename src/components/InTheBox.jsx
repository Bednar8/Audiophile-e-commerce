function InTheBox({product}) {
	return (
		<div className="flex flex-col mx-4 md:mx-8 md:flex-row xl:flex-col xl:w-[40%]">
			<h3 className="mb-6 text-2xl font-bold uppercase md:text-3xl md:w-1/2">
				in the box
			</h3>
			<ul className="md:w-1/2">
				{product.includes.map((el, i) => (
					<li key={i} className="flex items-center mb-2">
						<p className="w-5 text-orange-main font-bold text-[15px]">
							{el.quantity}x
						</p>
						<p className="ml-6 text-[15px] opacity-50">{el.item}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default InTheBox
