import doneIcon from "../assets/checkout/icon-order-confirmation.svg"
import {useConfirmOrder} from "../context/ConfirmContext"
import BasketProductSummary from "./BasketProductSummary"
import ButtonLink from "./ButtonLink"

function ThanksForOrder() {
	const {isConfirmOrder, handleConfirm} = useConfirmOrder()
	const paySummary = [
		{
			name: "total",
			cost: 5311,
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
		<>
			<div
				className={`${
					isConfirmOrder ? "left-1/2 translate-x-[-50%]" : "left-[-120%]"
				} max-w-[540px]  mx-auto h-full fixed  top-1/2 translate-y-[-50%] z-50  w-full transition-all overflow-y-auto mt-10`}>
				<div className="absolute flex flex-col items-center w-full h-max rounded-br-xl rounded-bl-xl md:flex-row md:pb-10 md:pt-16">
					<div className="p-8 mx-4 bg-white rounded-lg md:mx-8 md:w-[540px]">
						<img src={doneIcon} alt="" />
						<div>
							<h2 className="my-6 mb-4 text-2xl font-bold uppercase">
								Thank you for your order
							</h2>
							<p className="opacity-50 text-[15px]">
								You will receive an email confirmation shortly
							</p>
							<div className="flex flex-col my-6 rounded-lg bg-gray-main">
								<div className="flex flex-col p-6">
									<div className="flex items-center justify-between">
										<BasketProductSummary />
										<p className="font-bold text-[15px] opacity-50">x1</p>
									</div>

									<p className="text-xs font-bold border-t opacity-50 border-[#979797] text-center py-3 mt-3">
										and 2 other item(s)
									</p>
								</div>
								<div className="px-6 py-4 text-white rounded-b-lg bg-black-secondary">
									<p className="opacity-50 uppercase text-[15px]">
										grand total
									</p>
									<p className="mt-2 text-lg font-bold">$ 5,146</p>
								</div>
							</div>
							<ButtonLink
								isWidthFull={true}
								dest="home"
								onClick={handleConfirm}>
								Back to home
							</ButtonLink>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ThanksForOrder
