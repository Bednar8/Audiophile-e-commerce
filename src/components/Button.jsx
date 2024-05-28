function Button({children, type = "primary", onClick}) {
	return (
		<button
			onClick={onClick}
			className={`w-[160px] h-[48px] uppercase font-[600] text-sm transition-colors ${
				type == "primary"
					? "bg-orange-main text-white hover:bg-orange-secondary"
					: type == "black"
					? "bg-black-secondary text-white hover:bg-[#4C4C4C]"
					: ""
			}`}>
			{children}
		</button>
	)
}

export default Button
