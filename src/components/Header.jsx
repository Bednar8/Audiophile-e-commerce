import ButtonLink from "./ButtonLink"
import ProductSummary from "./ProductSummary"

function Header() {
	return (
		<header
			className={` bg-[url(/src/assets/home/mobile/image-header.jpg)] md:bg-[url(/src/assets/home/tablet/image-header.jpg)] xl:bg-[url(/src/assets/home/desktop/image-hero.jpg)] bg-cover bg-center w-full h-screen text-white xl:justify-start relative`}>
			<div className="header-content max-w-[1200px] mx-auto flex  justify-center items-center xl:justify-start">
				<div className="flex flex-col items-center justify-center xl:items-start">
					<ProductSummary
						name="XX99 Mark II
HeadphoneS"
						desc="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
						isNew={true}
					/>
					<ButtonLink type="primary" productSlug={"xx99-mark-two-headphones"}>
						see product
					</ButtonLink>
				</div>
			</div>
		</header>
	)
}

export default Header
