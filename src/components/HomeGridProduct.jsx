import ButtonLink from "./ButtonLink"

function HomeGridProduct({name}) {
	return (
		<div className="flex flex-col justify-center gap-6 xl:gap-8 max-w-[1200px] mx-auto md:flex-row">
			<div
				className={`bg-[url(/src/assets/home/mobile/image-earphones-yx1.jpg)] md:bg-[url(/src/assets/home/tablet/image-earphones-yx1.jpg)] h-[200px]  bg-cover mx-4 md:mx-8 bg-center rounded-xl flex flex-col justify-center p-6 md:p-16 xl:bg-[url(/src/assets/home/desktop/image-earphones-yx1.jpg)] md:w-1/2 md:mr-0 md:h-[320px]`}></div>
			<div className="h-[200px] rounded-xl flex flex-col justify-center mx-4 md:mx-8 bg-gray-main p-6 md:w-1/2 md:ml-0 md:h-[320px] md:p-9 xl:p-24">
				<h3 className="mb-8 text-3xl font-bold uppercase">{name}</h3>
				<ButtonLink type="transparent" productId={1}>
					see product
				</ButtonLink>
			</div>
		</div>
	)
}

export default HomeGridProduct
