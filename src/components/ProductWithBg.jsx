import ProductSummary from "../components/ProductSummary"

import circleIcon from "../assets/home/desktop/pattern-circles.svg"
import productImg from "../assets/home/mobile/image-speaker-zx9.png"
import productImgDesktop from "../assets/home/desktop/image-speaker-zx9.png"
import ButtonLink from "./ButtonLink"
import {useState} from "react"

function ProductWithBg() {
	const [largeScreen, setLargeScreen] = useState(window.innerWidth)

	window.addEventListener("resize", function (e) {
		setLargeScreen(e.target.innerWidth)
	})
	return (
		<div className="max-w-[1200px] mx-auto">
			<div className="flex flex-col items-center justify-center pb-8 mx-4 overflow-hidden text-white bg-orange-main rounded-xl md:pb-16 md:mx-8 xl:flex-row xl:relative xl:p-[70px] xl:h-[500px]">
				<div className="relative w-full h-full mt-6 mb-[280px] flex justify-center items-center md:mt-12 mx-4 xl:static">
					<img
						src={circleIcon}
						alt=""
						className="absolute top-[-100px]  scale-150 xl:scale-100"
					/>
					{largeScreen > 1200 ? (
						<img
							src={productImgDesktop}
							alt=""
							className="w-[40%] max-w-[180px] absolute top-3 xl:mt-auto xl:mb-[-10px] xl:w-full xl:max-w-[350px] xl:bottom-0"
						/>
					) : (
						<img
							src={productImg}
							alt=""
							className="w-[40%] max-w-[180px] absolute top-3 xl:mt-auto xl:mb-[-10px] xl:w-full xl:max-w-[350px] xl:bottom-0"
						/>
					)}
					<img
						src={productImg}
						alt=""
						className="w-[40%] max-w-[180px] absolute top-3 xl:mt-auto xl:mb-[-10px] xl:w-full xl:max-w-[350px] xl:bottom-0"
					/>
				</div>
				<div className="flex flex-col items-center justify-center xl:mr-20 xl:items-start">
					<ProductSummary
						name="ZX9 SPEAKER"
						desc="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
					/>
					<ButtonLink type="black" productId={"zx9-speaker"}>
						see product
					</ButtonLink>
				</div>
			</div>
		</div>
	)
}

export default ProductWithBg
