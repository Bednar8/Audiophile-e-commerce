import ProductSummary from "../components/ProductSummary"

import circleIcon from "../assets/home/desktop/pattern-circles.svg"
import productImg from "../assets/home/mobile/image-speaker-zx9.png"
import Button from "./Button"

function ProductWithBg() {
	return (
		<div className="flex flex-col items-center justify-center pb-8 mx-4 overflow-hidden text-white bg-orange-main rounded-xl">
			<div className="relative w-full h-full mt-6 mb-[300px] flex justify-center items-center">
				<img
					src={circleIcon}
					alt=""
					className="absolute top-[-100px]  scale-150"
				/>
				<img
					src={productImg}
					alt=""
					className="w-[40%] max-w-[180px] absolute  top-3"
				/>
			</div>

			<ProductSummary
				name="ZX9 SPEAKER"
				desc="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
			/>
			<Button type="black">see product</Button>
		</div>
	)
}

export default ProductWithBg
