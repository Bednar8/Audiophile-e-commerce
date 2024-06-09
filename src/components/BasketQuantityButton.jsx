import {useState} from "react"

function BasketQuantityButton({small = true, product}) {
	const [quantity, setQuantity] = useState(product.quantity)

	console.log(product)

	const increaseCurrentProductQuantity = () => {
		setQuantity(quantity + 1)

		product.quantity = quantity + 1
	}

	const decreaseCurrentProductQuantity = () => {
		setQuantity(quantity - 1)

		product.quantity = quantity - 1
	}

	return (
		<div
			className={`${
				small ? "h-9 w-24" : "w-[120px] h-[48px]"
			} flex items-center justify-between bg-gray-main `}>
			<button
				className="w-full h-full transition-colors hover:text-orange-main"
				onClick={decreaseCurrentProductQuantity}
				disabled={quantity <= 0}>
				-
			</button>
			<span className="w-full text-center text-[13px] font-bold">
				{quantity}
			</span>
			<button
				className="w-full h-full transition-colors hover:text-orange-main"
				onClick={increaseCurrentProductQuantity}>
				+
			</button>
		</div>
	)
}

export default BasketQuantityButton
