import BasketProductSummary from "./BasketProductSummary"
import BasketQuantityButton from "./BasketQuantityButton"

function BasketProduct({product}) {
	console.log(product)
	return (
		<div className="flex items-center justify-between my-8">
			<BasketProductSummary product={product} />
			<BasketQuantityButton product={product} />
		</div>
	)
}

export default BasketProduct
