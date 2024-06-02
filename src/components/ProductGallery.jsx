import {useMediaQuery} from "react-responsive"

function ProductGallery({product}) {
	const isTablet = useMediaQuery({query: "(min-width: 768px)"})
	const isDesktop = useMediaQuery({query: "(min-width: 1280px)"})

	const firstImage = isDesktop
		? product.gallery.first.desktop
		: isTablet
		? product.gallery.first.tablet
		: product.gallery.first.mobile

	const secondImage = isDesktop
		? product.gallery.second.desktop
		: isTablet
		? product.gallery.second.tablet
		: product.gallery.second.mobile

	const thirdImage = isDesktop
		? product.gallery.third.desktop
		: isTablet
		? product.gallery.third.tablet
		: product.gallery.third.mobile

	return (
		<div className="flex flex-col items-center justify-center gap-5 mx-4 my-20 md:flex-row md:mx-8">
			{product && (
				<>
					<div className="flex flex-col  w-full h-full gap-5 md:h-[570px] md:w-[40%]">
						<div
							style={{backgroundImage: `url(${firstImage})`}}
							className=" w-full h-[170px] md:h-[275px] rounded-xl bg-cover bg-center"></div>
						<div
							style={{backgroundImage: `url(${secondImage})`}}
							className=" w-full h-[170px] md:h-[275px] rounded-xl bg-cover bg-center"></div>
					</div>
					<div
						style={{backgroundImage: `url(${thirdImage})`}}
						className="md:w-[60%] h-[360px]  w-full md:h-[570px] rounded-xl bg-cover bg-center"></div>
				</>
			)}
		</div>
	)
}

export default ProductGallery
