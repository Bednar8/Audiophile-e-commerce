import {useBasket} from "../context/BasketContext"
import {useConfirmOrder} from "../context/ConfirmContext"
import BasketProduct from "./BasketProduct"
// import BasketProductSummary from "./BasketProductSummary"
import Button from "./Button"

function Summary() {
	const {handleConfirm} = useConfirmOrder()
	const {productsInBasket} = useBasket()
	const {totalPrice} = useBasket()

	console.log(totalPrice)
	const paySummary = [
		{
			name: "total",
			cost: totalPrice,
		},
		{
			name: "shipping",
			cost: 50,
		},
		{
			name: "vat",
			cost: 1024,
		},
		{
			name: "grand total",
			cost: 5361,
		},
	]
	return (
		<div className="px-6 py-8 bg-white rounded-lg xl:w-1/3 xl:h-max">
			<h4 className="text-lg font-bold uppercase mb-7">summary</h4>
			<ul className="flex items-center justify-between">
				{productsInBasket.length > 0
					? productsInBasket.map((product, i) => (
							<BasketProduct product={product} key={i} />
					  ))
					: "You don`t have any product in basket"}
				<p className="font-bold text-[15px] opacity-50">x1</p>
			</ul>
			<div className="my-8">
				{paySummary.map((el, i) => (
					<div
						key={i}
						className={`${
							el.name === "grand total" && "mt-5"
						} flex justify-between items-center my-2`}>
						<p className="uppercase text-[15px] opacity-50">{el.name}</p>
						<p
							className={`${
								el.name === "grand total" && "text-orange-main"
							} text-lg font-bold`}>
							${el.cost}
						</p>
					</div>
				))}
			</div>
			<Button isWidthFull={true} confirm={true} onClick={handleConfirm}>
				continue & pay
			</Button>
		</div>
	)
}

export default Summary
