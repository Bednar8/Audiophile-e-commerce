function CheckoutCheckbox({paymentMethod, handlePaymentChange, name, value}) {
	return (
		<div className="rounded-lg border border-[#CFCFCF] px-6 py-5 flex items-center mb-4 text-sm font-bold">
			<label className="flex items-center">
				<input
					type="radio"
					name="paymentMethod"
					value={value}
					checked={paymentMethod === "eMoneyCheckbox"}
					onChange={handlePaymentChange}
					className={`${
						paymentMethod === "eMoneyCheckbox" ? "accent-orange-main" : ""
					}  w-5 h-5 mr-4 `}
				/>
				{name}
			</label>
		</div>
	)
}

export default CheckoutCheckbox
