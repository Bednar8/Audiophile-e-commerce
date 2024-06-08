import {useState} from "react"
import ButtonGoBack from "../components/ButtonGoBack"
import CheckoutInput from "../components/CheckoutInput"
import Summary from "../components/Summary"

import cashoOnDeliveryIcon from "../assets/checkout/icon-cash-on-delivery.svg"
import ThanksForOrder from "../components/ThanksForOrder"

function Checkout() {
	const [formData, setFormData] = useState()
	const [paymentMethod, setPaymentMethod] = useState("eMoneyCheckbox")

	const handlePaymentChange = (e) => {
		setPaymentMethod(e.target.value)
	}

	const handleChange = (e) => {
		const {name, value} = e.target

		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault
	}

	const billingDetails = [
		{
			id: "name",
			label: "Name",
			placeholder: "Alexei Ward",
		},
		{
			id: "mail",
			label: "Email Address",
			placeholder: "alexei@mail.com",
		},
		{
			id: "phone",
			label: "Phone Number",
			placeholder: "+1 202-555-0136",
		},
	]

	const shippingInfo = [
		{
			id: "address",
			label: "Your Address",
			placeholder: "1137 Williams Avenue",
		},
		{
			id: "zip",
			label: "ZIP Code",
			placeholder: "10001",
		},
		{
			id: "city",
			label: "City",
			placeholder: "New York",
		},
		{
			id: "country",
			label: "Country",
			placeholder: "United States",
		},
	]

	const paymentMethods = [
		{
			id: "eMoneyCheckbox",
			type: "checkbox",
			name: "e-Money",

			options: [
				{
					id: "eMoneyNumber",
					label: "e-Money Number",
					placeholder: "238521993",
				},
				{
					id: "eMoneyPin",
					label: "e-Money PIN",
					placeholder: "6891 ",
				},
			],
		},
		{
			id: "cashOnDelivery",
			type: "checkbox",
			name: "Cash on Delivery",
		},
	]

	return (
		<div>
			<div className="h-[100px] bg-black-secondary"></div>
			<div className="max-w-[1200px] mx-auto">
				<div className="h-full pt-5 pb-24 mx-4 xl:mt-16">
					<ButtonGoBack />
					<div className="xl:flex xl:mt-9 xl:gap-8">
						<div className="p-6 mt-6 mb-8 bg-white rounded-lg xl:mt-0 xl:w-2/3">
							<h3 className="mb-8 text-3xl font-bold uppercase">Checkout</h3>
							<form onSubmit={handleSubmit}>
								<div>
									<p className="mt-8 mb-4 text-sm font-bold tracking-wider uppercase text-orange-main">
										billing details
									</p>
									<div className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center">
										{billingDetails.map((input) => {
											return (
												<CheckoutInput
													key={input.label}
													id={input.id}
													label={input.label}
													placeholder={input.placeholder}
												/>
											)
										})}
									</div>
								</div>

								<div>
									<p className="mt-8 mb-4 text-sm font-bold tracking-wider uppercase text-orange-main">
										shipping info
									</p>
									<div className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center">
										{shippingInfo.map((input) => {
											return (
												<CheckoutInput
													key={input.label}
													id={input.id}
													label={input.label}
													placeholder={input.placeholder}
												/>
											)
										})}
									</div>
								</div>

								<div>
									<p className="mt-8 mb-4 text-sm font-bold tracking-wider uppercase text-orange-main">
										payment details
									</p>
									<div className="flex justify-between">
										<p className="hidden text-xs font-bold md:block">
											Payment Method
										</p>
										<div className="w-full md:w-1/2">
											<div className="rounded-lg border border-[#CFCFCF] px-6 py-5 flex items-center mb-4 text-sm font-bold">
												<label className="flex items-center">
													<input
														type="radio"
														name="paymentMethod"
														value="eMoneyCheckbox"
														checked={paymentMethod === "eMoneyCheckbox"}
														onChange={handlePaymentChange}
														className={`${
															paymentMethod === "eMoneyCheckbox"
																? "accent-orange-main"
																: ""
														}  w-5 h-5 mr-4 `}
													/>
													E-Money
												</label>
											</div>
											<div className="rounded-lg border border-[#CFCFCF] px-6 py-5 flex items-center mb-4 text-sm font-bold">
												<label className="flex items-center">
													<input
														type="radio"
														name="paymentMethod"
														value="cashOnDelivery"
														checked={paymentMethod === "cashOnDelivery"}
														onChange={handlePaymentChange}
														className={`${
															paymentMethod === "cashOnDelivery"
																? "accent-orange-main"
																: ""
														}  w-5 h-5 mr-4 `}
													/>
													Cash on Devlivery
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className="my-6 md:justify-between md:flex ">
									{paymentMethod === "eMoneyCheckbox" &&
										paymentMethods
											.find((method) => method.id === "eMoneyCheckbox")
											.options.map((opt) => (
												<CheckoutInput
													key={opt.label}
													label={opt.label}
													id={opt.id}
													placeholder={opt.placeholder}
												/>
											))}
									{paymentMethod === "cashOnDelivery" && (
										<div className="flex flex-col items-center justify-center md:flex-row md:gap-x-8">
											<img
												src={cashoOnDeliveryIcon}
												alt=""
												className="mb-6 md:mb-0"
											/>
											<p className="opacity-50 text-[15px]">
												The ‘Cash on Delivery’ option enables you to pay in cash
												when our delivery courier arrives at your residence.
												Just make sure your address is correct so that your
												order will not be cancelled.
											</p>
										</div>
									)}
								</div>
							</form>
						</div>
						<Summary />
					</div>
				</div>
			</div>
			<ThanksForOrder />
		</div>
	)
}

export default Checkout
