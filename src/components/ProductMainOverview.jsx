import {useMediaQuery} from "react-responsive"
import QuantityButton from "./QuantityButton"
import Button from "./Button"
import {useBasket} from "../context/BasketContext"
// import {useEffect, useState} from "react"
import {useProductQuantity} from "../context/ProductQuantityContext"

function ProductMainOverview({product}) {
	const {handleAddToBasket, handleBasket} = useBasket()
	const {productQuantity, resetQuantity} = useProductQuantity()

	const isTablet = useMediaQuery({query: "(min-width: 768px)"})
	const isDesktop = useMediaQuery({query: "(min-width: 1280px)"})

	return (
		<div className="flex flex-col items-center justify-center gap-16 mx-4 mt-5 my-14 xl:mt-8 md:mx-8 md:flex-row xl:gap-32 xl:mb-40">
			<img
				src={
					isDesktop
						? product.image.desktop
						: isTablet
						? product.image.tablet
						: product.image.mobile
				}
				alt={product.name}
				className="object-cover h-[320px] w-full rounded-xl md:h-[480px] xl:w-1/2"
			/>
			<div className="flex flex-col items-start justify-center xl:w-1/2">
				{product.new && (
					<p className="tracking-[10px] opacity-50 text-sm uppercase text-orange-main mt-8">
						new product
					</p>
				)}
				<h3 className="text-3xl font-[600] tracking-wider uppercase  mt-8 text-start xl:text-4xl">
					{product.name}
				</h3>
				<p className="opacity-50 text-[15px] mt-6 md:max-w-[570px] text-start">
					{product.description}
				</p>
				<p className="my-6 text-lg font-bold">
					$ {product.price.toLocaleString("en-US")}
				</p>
				<div className="flex items-center justify-start gap-4">
					<QuantityButton />
					<Button
						type="primary"
						productId={product.id}
						onClick={() => {
							product.quantity = productQuantity
							handleAddToBasket(product)
							handleBasket()
							resetQuantity()
						}}>
						add to cart
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ProductMainOverview
