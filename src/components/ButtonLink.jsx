import {Link} from "react-router-dom"

function ButtonLink({
	children,
	type = "primary",
	productSlug,
	isWidthFull = false,
	dest = "product",
}) {
	const getPath = () => {
		if (dest === "product") {
			return `/product/${productSlug}`
		} else if (dest === "checkout") {
			return `/checkout`
		} else {
			return "/"
		}
	}
	return (
		<Link
			to={getPath()}
			className={`${
				isWidthFull ? "w-full" : "w-[160px]"
			} relative z-20   h-[48px] uppercase font-[600] text-sm transition-colors flex justify-center items-center ${
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
