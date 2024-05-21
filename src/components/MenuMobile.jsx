import {Link} from "react-router-dom"
import {categories} from "../config"
import {useMenuMobile} from "../context/MenuMobileContext"
// import {useEffect} from "react"

// import earphonesIcon from "../assets/shared/desktop/image-category-thumbnail-earphones.png"
// import headphonesIcon from "../assets/shared/desktop/image-category-thumbnail-headphones.png"
// import speakersIcon from "../assets/shared/desktop/image-category-thumbnail-speakers.png"

function MenuMobile() {
	const {isMenuOpen} = useMenuMobile()

	return (
		<div
			className={`${
				isMenuOpen && "left-[0]"
			} fixed left-[-120%] top-[100px] z-30 w-full bg-white  transition-all overflow-y-auto h-full`}>
			<div className="absolute items-center w-full h-full">
				{categories.map((categorie, i) => (
					<div
						key={i}
						className="flex items-center justify-center w-full h-[150px]">
						<div className="flex flex-col items-center justify-center text-black-secondary h-[150px] my-6 bg-gray-main  w-full z-0">
							<img
								src={categorie.imageUrl}
								alt=""
								className="w-[35%] top-[-60%]"
							/>
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
