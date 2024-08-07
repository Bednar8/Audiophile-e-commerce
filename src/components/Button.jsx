function Button({children, isWidthFull = false, type = "primary", onClick}) {
	return (
		<button
			onClick={onClick}
			className={`${
				isWidthFull ? "w-full" : "w-[160px]"
			} relative z-[5]   h-[48px] uppercase font-[600] text-sm transition-colors flex justify-center items-center ${
				type == "primary"
					? "bg-orange-main text-white hover:bg-orange-secondary"
					: type == "black"
					? "bg-black-secondary text-white hover:bg-[#4C4C4C]"
					: type == "transparent"
					? "bg-transparent text-black-secondary border border-black-secondary hover:bg-black-secondary hover:text-white"
					: ""
			}`}>
			{children}
		</button>
	)
}

export default Button
