import BasketProductSummary from "./BasketProductSummary"
import QuantityButton from "./QuantityButton"

function BasketProduct() {
	return (
		<div className="flex items-center justify-between my-8">
			<BasketProductSummary />
			<QuantityButton small={true} />
		</div>
	)
}

export default BasketProduct
