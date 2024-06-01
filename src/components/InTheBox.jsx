function InTheBox({product}) {
	return (
		<div className="mx-4 md:mx-8">
			<h3 className="mb-6 text-2xl font-bold uppercase">in the box</h3>
			<ul>
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
