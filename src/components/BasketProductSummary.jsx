function BasketProductSummary({product}) {
	const formatPrice = product.price.toLocaleString("en-US")
	return (
		<div className="flex items-center justify-center gap-4">
			<img src={product.cartImg} alt="" className="w-16 h-16 rounded-lg" />
			<div>
				<h4 className="text-xs font-bold">{product.name}</h4>
				<p className="text-sm font-bold opacity-50">$ {formatPrice}</p>
			</div>
		</div>
	)
}

export default BasketProductSummary
