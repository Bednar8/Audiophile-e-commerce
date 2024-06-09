import {useState} from "react"
import {useBasket} from "../context/BasketContext"
import BasketProduct from "./BasketProduct"
import ButtonLink from "./ButtonLink"

function Basket() {
	const {isBasketOpen, handleBasket, setIsBasketOpen, productsInBasket} =
		useBasket()
	const [total, setTotal] = useState(1000)

	return (
		<div
			className={`${
				isBasketOpen ? "top-[50px]" : "top-[-100%]"
			} menu-container  my-8 max-w-[1200px] fixed left-[50%] translate-x-[-50%]  w-full transition-all z-20`}
			onClick={() => setIsBasketOpen(false)}>
			<div
				className={`right-0 absolute   flex flex-col items-center w-full p-4  h-max md:flex-row md:pb-10 max-w-[450px] transition-all`}
				onClick={(e) => e.stopPropagation()}>
				<div className="w-full h-full mx-4 overflow-auto bg-white rounded-lg p-7">
					<div className="flex items-center justify-between">
						<p className="text-lg font-bold uppercase">
							Cart <span>({productsInBasket.length})</span>
						</p>
						<button className="text-[15px] opacity-50 underline">
							Remove all
						</button>
					</div>
					<ul>
						{productsInBasket.length > 0
							? productsInBasket.map((product, i) => (
									<BasketProduct product={product} key={i} />
							  ))
							: "You don`t have any product in basket"}
					</ul>
					<div className="flex items-center justify-between mb-6">
						<p className="uppercase opacity-50 text-[15px]">Total</p>
						<p className="text-lg font-bold">
							$ {total.toLocaleString("en-US")}
						</p>
					</div>

					<ButtonLink isWidthFull={true} dest="checkout" onClick={handleBasket}>
						Checkout
					</ButtonLink>
				</div>
			</div>
		</div>
	)
}

export default Basket
