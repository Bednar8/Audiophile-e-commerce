import {useMediaQuery} from "react-responsive"

import ButtonLink from "./ButtonLink"

function OtherProducts({product}) {
	const isTablet = useMediaQuery({query: "(min-width: 768px)"})
	const isDesktop = useMediaQuery({query: "(min-width: 1280px)"})
	const otherProducts = product.others
	return (
		<div className="mx-4 md:mx-8 mt-28 xl:mt-40">
			<h3 className="text-center text-3xl font-bold uppercase mb-10">
				you may also like
			</h3>
			<div className="flex flex-col justify-center items-center md:flex-row gap-3 xl:gap-6">
				{otherProducts.map((product, i) => (
					<div
						key={i}
						className="flex flex-col justify-center items-center mb-14">
						<img
							src={
								isDesktop
									? product.image.desktop
									: isTablet
									? product.image.tablet
									: product.image.mobile
							}
							alt={product.name}
							className="rounded-xl"
						/>
						<h3 className="my-6 text-2xl font-bold">{product.name}</h3>
						<ButtonLink type="primary" productSlug={product.slug}>
							see product
						</ButtonLink>
					</div>
				))}
			</div>
		</div>
	)
}

export default OtherProducts
