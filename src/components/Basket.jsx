import {useBasket} from "../context/BasketContext"
import BasketProduct from "./BasketProduct"
import ButtonLink from "./ButtonLink"

function Basket() {
	const {isBasketOpen} = useBasket()

	return (
		<div
			className={`${
				isBasketOpen && "right-[0]"
			} menu-container max-w-[1200px] mx-auto my-8 max-h-[750px] fixed right-[-120%] top-[100px] z-30  w-full transition-all overflow-y-auto`}>
			<div className="absolute flex flex-col items-center w-full p-4 md:p-8 h-max md:flex-row md:pb-10 max-w-[450px]">
				<div className="w-full h-full mx-4 bg-white rounded-lg p-7 md:mx-8">
					<div className="flex items-center justify-between">
						<p className="text-lg font-bold uppercase">
							Cart <span>(3)</span>
						</p>
						<button className="text-[15px] opacity-50 underline">
							Remove all
						</button>
					</div>
					<ul>
						<BasketProduct />
					</ul>
					<div className="flex items-center justify-between mb-6">
						<p className="uppercase opacity-50 text-[15px]">Total</p>
						<p className="text-lg font-bold">$ 5,379</p>
					</div>

					<ButtonLink isWidthFull={true}>Checkout</ButtonLink>
				</div>
			</div>
		</div>
	)
}

export default Basket
