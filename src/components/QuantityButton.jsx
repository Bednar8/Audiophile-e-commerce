import {useProductQuantity} from "../context/ProductQuantityContext"

function QuantityButton({small = false}) {
	const {productQuantity, increaseQuantity, decreaseQuantity} =
		useProductQuantity()

	return (
		<div
			className={`${
				small ? "h-9 w-24" : "w-[120px] h-[48px]"
			} flex items-center justify-between bg-gray-main `}>
			<button
				className="w-full h-full transition-colors hover:text-orange-main"
				onClick={() => decreaseQuantity()}>
				-
			</button>
			<span className="w-full text-center text-[13px] font-bold">
				{productQuantity}
			</span>
			<button
				className="w-full h-full transition-colors hover:text-orange-main"
				onClick={() => increaseQuantity()}>
				+
			</button>
		</div>
	)
}

export default QuantityButton
