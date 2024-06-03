function QuantityButton({small = false}) {
	return (
		<div
			className={`${
				small ? "h-9 w-24" : "w-[120px] h-[48px]"
			} flex items-center justify-between bg-gray-main `}>
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
