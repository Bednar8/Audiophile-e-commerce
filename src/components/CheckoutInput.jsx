function CheckoutInput({id, label, placeholder}) {
	return (
		<div className="flex flex-col mb-6">
			<label htmlFor={id} className="mb-2 text-xs font-bold">
				{label}
			</label>
			<input
				type="text"
				id={id}
				placeholder={placeholder}
				className="px-6 py-5 rounded-lg border border-[#CFCFCF]"
			/>
		</div>
	)
}

export default CheckoutInput
