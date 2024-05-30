import {Link} from "react-router-dom"

function ButtonLink({children, type = "primary", onClick}) {
	return (
		<Link
			to="/"
			onClick={onClick}
			className={`relative z-20 w-[160px] h-[48px] uppercase font-[600] text-sm transition-colors flex justify-center items-center ${
				type == "primary"
					? "bg-orange-main text-white hover:bg-orange-secondary"
					: type == "black"
					? "bg-black-secondary text-white hover:bg-[#4C4C4C]"
					: type == "transparent"
					? "bg-transparent text-black-secondary border border-black-secondary hover:bg-black-secondary hover:text-white"
					: ""
			}`}>
			{children}
		</Link>
	)
}

export default ButtonLink