function QuantityButton() {
	return (
		<div className="flex items-center justify-between bg-gray-main w-[120px] h-[48px] mr-4">
			<button className="w-full h-full transition-colors hover:text-orange-main">
				-
			</button>
			<span className="w-full text-center text-[13px] font-bold">1</span>
			<button className="w-full h-full transition-colors hover:text-orange-main">
				+
			</button>
		</div>
	)
}

export default QuantityButton
