import {useState} from "react"
import ButtonGoBack from "../components/ButtonGoBack"
import CheckoutInput from "../components/CheckoutInput"
import CheckoutCheckbox from "../components/CheckoutCheckbox"

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
			<div className="max-w-[1200px] mx-auto bg-gray-main">
				<div className="h-full pt-5 pb-24 mx-4">
					<ButtonGoBack />
					<div className="p-6 mt-6 bg-white rounded-lg">
						<h3 className="mb-8 text-3xl font-bold uppercase">Checkout</h3>
						<form onSubmit={handleSubmit}>
							<div>
								<p className="mt-8 mb-4 text-sm font-bold tracking-wider uppercase text-orange-main">
									billing details
								</p>
								{billingDetails.map((input, i) => {
									return (
										<CheckoutInput
											key={i}
											id={input.id}
											label={input.label}
											placeholder={input.placeholder}
										/>
									)
								})}
							</div>

							<div>
								<p className="mt-8 mb-4 text-sm font-bold tracking-wider uppercase text-orange-main">
									shipping info
								</p>
								{shippingInfo.map((input, i) => {
									return (
										<CheckoutInput
											key={i}
											id={input.id}
											label={input.label}
											placeholder={input.placeholder}
										/>
									)
								})}
							</div>

							<div>
								<p className="mt-8 mb-4 text-sm font-bold tracking-wider uppercase text-orange-main">
									payment details
								</p>
								{paymentMethods.map((method, i) => (
									<CheckoutCheckbox
										key={i}
										handlePaymentChange={handlePaymentChange}
										value={method.id}
										paymentMethod={paymentMethod}
										name={method.name}
									/>
								))}
							</div>
							{paymentMethod === "eMoneyCheckbox" &&
								paymentMethods
									.find((method) => method.id === "eMoneyCheckbox")
									.options.map((opt, i) => (
										<CheckoutInput
											key={i}
											label={opt.label}
											id={opt.id}
											placeholder={opt.placeholder}
										/>
									))}
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Checkout
