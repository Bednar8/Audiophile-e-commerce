import {useEffect, useState} from "react"
import doneIcon from "../assets/checkout/icon-order-confirmation.svg"
import {useConfirmOrder} from "../context/ConfirmContext"
import ButtonLink from "./ButtonLink"
import {useBasket} from "../context/BasketContext"
import BasketProduct from "./BasketProduct"

import {shipping} from "../config"

function ThanksForOrder() {
	const {productsInBasket} = useBasket()
	const {isConfirmOrder, handleConfirm, closeConfirm} = useConfirmOrder()
	const {totalPrice} = useBasket()
	const [modalStyle, setModalStyle] = useState({
		position: "fixed",
		top: "50px",
		left: "50%",
		transform: "translateX(-50%)",
	})

	const curShipping = totalPrice > 0 ? shipping : 0

	useEffect(() => {
		if (isConfirmOrder) {
			const scrollTop = window.scrollY
			const newTop = 50 + scrollTop
			setModalStyle({
				position: "absolute",
				top: `${newTop}px`,
				left: "50%",
				transform: "translateX(-50%)",
			})
		}
	}, [isConfirmOrder])

	if (!isConfirmOrder) return null

	return (
		<div
			style={modalStyle}
			className="relative h-max max-w-[1200px] z-20 w-full"
			onClick={closeConfirm}>
			<div
				className="absolute z-20 left-1/2 -translate-x-1/2 flex flex-col items-center w-full mx-auto transition-all h-max rounded-br-xl rounded-bl-xl md:flex-row md:pb-10 md:pt-16 max-w-[540px]"
				onClick={(e) => e.stopPropagation()}>
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
									<div className="flex flex-col items-center justify-between w-full">
										{productsInBasket.length > 0
											? productsInBasket.map((product, i) => (
													<BasketProduct
														product={product}
														key={i}
														summary={true}
													/>
											  ))
											: "You don`t have any product in basket"}
									</div>
								</div>

								<p className="text-xs font-bold border-t opacity-50 border-[#979797] text-center py-3 mt-3">
									and 2 other item(s)
								</p>
							</div>
							<div className="px-6 py-4 text-white rounded-b-lg bg-black-secondary">
								<p className="opacity-50 uppercase text-[15px]">grand total</p>
								<p className="mt-2 text-lg font-bold">
									$ {totalPrice + curShipping}
								</p>
							</div>
						</div>
						<ButtonLink isWidthFull={true} dest="home" onClick={handleConfirm}>
							Back to home
						</ButtonLink>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ThanksForOrder
