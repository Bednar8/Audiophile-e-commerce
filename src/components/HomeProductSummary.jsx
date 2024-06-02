// import productImg from "../assets/home/mobile/image-speaker-zx7.jpg"
// import productImgTablet from "../assets/home/tablet/image-speaker-zx7.png"
// import productImgDesktop from "../assets/home/desktop/image-speaker-zx7.png"

import ButtonLink from "./ButtonLink"

function HomeProductSummary({name}) {
	return (
		<div className="h-[320px] w-full mx-auto max-w-[1200px] my-6 md:my-8 xl:my-16">
			<div
				className={`bg-[url(/src/assets/home/mobile/image-speaker-zx7.jpg)] md:bg-[url(/src/assets/home/tablet/image-speaker-zx7.jpg)] h-full  bg-cover mx-4 md:mx-8 bg-center rounded-xl flex flex-col justify-center p-6 md:p-16 xl:bg-[url(/src/assets/home/desktop/image-speaker-zx7.jpg)]`}>
				<h3 className="mb-8 text-3xl font-bold uppercase">{name}</h3>
				<ButtonLink type="transparent" productSlug={"zx7-speaker"}>
					see product
				</ButtonLink>
			</div>
		</div>
	)
}

export default HomeProductSummary

{
	/* <header
className={` bg-[url(/src/assets/home/mobile/image-header.jpg)] md:bg-[url(/src/assets/home/tablet/image-header.jpg)] xl:bg-[url(/src/assets/home/desktop/image-hero.jpg)] bg-cover bg-center w-full h-screen text-white xl:justify-start relative`}>
<div className="header-content max-w-[1200px] mx-auto flex  justify-center items-center xl:justify-start"> */
}
