import {Link} from "react-router-dom"
import {categories} from "../config"
import {useMenuMobile} from "../context/MenuMobileContext"
// import {useEffect} from "react"

// import earphonesIcon from "../assets/shared/desktop/image-category-thumbnail-earphones.png"
// import headphonesIcon from "../assets/shared/desktop/image-category-thumbnail-headphones.png"
// import speakersIcon from "../assets/shared/desktop/image-category-thumbnail-speakers.png"

function MenuMobile() {
	const {isMenuOpen} = useMenuMobile()

	if (isMenuOpen) document.body.style.overflowY = "hidden"
	else document.body.style.overflowY = "auto"

	return (
		<div
			className={`${
				isMenuOpen && "left-[0]"
			} menu-container fixed left-[-120%] top-[100px] z-30 bg-white w-full transition-all overflow-y-auto`}>
			<div className="absolute items-center w-full h-full">
				{categories.map((categorie, i) => (
					<div key={i} className="flex items-center justify-center">
						<div className="z-0 flex flex-col items-center justify-center w-full my-6 text-black-secondary bg-gray-main">
							<img src={categorie.imageUrl} alt="" className="w-[35%]" />
							<p className="font-bold uppercase text-black-secondary">
								{categorie.name}
							</p>
							<Link to={`/categorie/${categorie.name}`} className="uppercase">
								shop
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default MenuMobile
