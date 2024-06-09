// import {useState} from "react"
import {useBasket} from "../context/BasketContext"

function BasketQuantityButton({small = true, product}) {
	// const [quantity, setQuantity] = useState(product.quantity)
	const {updateQuantity} = useBasket()

	console.log(product)

	return (
		<div
			className={`${
				small ? "h-9 w-24" : "w-[120px] h-[48px]"
			} flex items-center justify-between bg-gray-main `}>
			<button
				className="w-full h-full transition-colors hover:text-orange-main"
				onClick={() => updateQuantity(product.id, product.quantity - 1)}
				disabled={product.quantity <= 1}>
				-
			</button>
			<span className="w-full text-center text-[13px] font-bold">
				{product.quantity}
			</span>
			<button
				className="w-full h-full transition-colors hover:text-orange-main"
				onClick={() => updateQuantity(product.id, product.quantity + 1)}>
				+
			</button>
		</div>
	)
}

export default BasketQuantityButton
