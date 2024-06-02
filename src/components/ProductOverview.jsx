import ButtonLink from "./ButtonLink"
import {useMediaQuery} from "react-responsive"

function ProductOverview({product, index}) {
	const isTablet = useMediaQuery({query: "(min-width: 768px)"})
	const isDesktop = useMediaQuery({query: "(min-width: 1280px)"})

	return (
		<div
			className={`${
				index % 2 == 0 ? "xl:flex-row" : "xl:flex-row-reverse"
			} flex flex-col items-center justify-center mx-4 my-14 md:mx-8  xl:gap-28 `}>
			<img
				src={
					isDesktop
						? product.categoryImage.desktop
						: isTablet
						? product.categoryImage.tablet
						: product.categoryImage.mobile
				}
				alt={product.name}
				className="w-full h-[352px] object-cover rounded-xl xl:w-1/2 xl:h-[550px]"
			/>
			<div className="flex flex-col items-center justify-center xl:w-1/2 xl:items-start">
				{product.new && (
					<p className="tracking-[10px] opacity-50 text-sm uppercase text-orange-main mt-8">
						new product
					</p>
				)}
				<h3 className="text-4xl font-[600] tracking-wider uppercase md:text-[56px] md:leading-[3.5rem] text-center mt-8 xl:text-start">
					{product.name}
				</h3>
				<p className="opacity-50 text-[15px] text-center my-6 md:max-w-[570px] xl:text-start">
					{product.description}
				</p>
				<ButtonLink type="primary" productSlug={product.slug}>
					see product
				</ButtonLink>
			</div>
		</div>
	)
}

export default ProductOverview
