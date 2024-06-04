import {useBasket} from "../context/BasketContext"
import BasketProduct from "./BasketProduct"
import ButtonLink from "./ButtonLink"

function Basket() {
	const {isBasketOpen} = useBasket()

	return (
		<div
			className={`menu-container left-[50%] translate-x-[-50%] my-8 max-h-[750px] max-w-[1200px] fixed  top-[70px] z-30  w-full transition-all`}>
			<div
				className={`${
					isBasketOpen ? "right-[0]" : "right-[-120%]"
				}  absolute   flex flex-col items-center w-full p-4  h-max md:flex-row md:pb-10 max-w-[450px] transition-all`}>
				<div className="w-full h-full mx-4 bg-white rounded-lg p-7 ">
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
