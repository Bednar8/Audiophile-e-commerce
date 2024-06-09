import BasketProductSummary from "./BasketProductSummary"
import BasketQuantityButton from "./BasketQuantityButton"

function BasketProduct({product, summary = false}) {
	return (
		<div className="flex items-center justify-between w-full my-8">
			<BasketProductSummary product={product} />
			{summary ? (
				<p className="opacity-50 font-bold text-[15px]">x{product.quantity}</p>
			) : (
				<BasketQuantityButton product={product} />
			)}
		</div>
	)
}

export default BasketProduct
