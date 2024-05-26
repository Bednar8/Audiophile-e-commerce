import ProductSummary from "./ProductSummary"

function Header() {
	return (
		<header
			className={` bg-[url(/src/assets/home/mobile/image-header.jpg)] md:bg-[url(/src/assets/home/tablet/image-header.jpg)] xl:bg-[url(/src/assets/home/desktop/image-hero.jpg)] bg-cover bg-center w-full h-screen text-white xl:justify-start relative`}>
			<div className="header-content max-w-[1200px] mx-auto flex justify-center items-center xl:justify-start">
				{
					<ProductSummary
						name="XX99 Mark II
HeadphoneS"
						desc="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
						isNew={true}
					/>
				}
			</div>
		</header>
	)
}

export default Header
