import QuantityButton from "./QuantityButton"

function BasketProduct() {
	return (
		<div className="flex items-center justify-between my-8">
			<div className="flex items-center justify-center gap-4">
				<img
					src="/src/assets/cart/image-xx59-headphones.jpg"
					alt=""
					className="w-16 h-16 rounded-lg"
				/>
				<div>
					<h4>name</h4>
					<p>price</p>
				</div>
			</div>
			<QuantityButton small={true} />
		</div>
	)
}

export default BasketProduct
