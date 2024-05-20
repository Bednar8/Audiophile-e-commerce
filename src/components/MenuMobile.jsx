import {Link} from "react-router-dom"
import {categories} from "../config"
import {useMenuMobile} from "../context/MenuMobileContext"
import {useEffect} from "react"

// import earphonesIcon from "../assets/shared/desktop/image-category-thumbnail-earphones.png"
// import headphonesIcon from "../assets/shared/desktop/image-category-thumbnail-headphones.png"
// import speakersIcon from "../assets/shared/desktop/image-category-thumbnail-speakers.png"

function MenuMobile() {
	const {isMenuOpen} = useMenuMobile()

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "auto"
		}

		return () => {
			document.body.style.overflow = "auto"
		}
	}, [isMenuOpen])

	return (
		<div
			className={`${
				isMenuOpen && "left-[0]"
			} absolute left-[-120%] top-[100px] z-30 w-full bg-white h-max p-7 transition-all overflow-y-auto`}>
			<ul className="flex flex-col items-center justify-center">
				{categories.map((categorie, i) => (
					<li key={i} className="flex items-center justify-center w-full ">
						<div className="relative flex flex-col items-center justify-center text-black-secondary h-[150px] my-6 bg-gray-main  w-full z-0">
							<img
								src={categorie.imageUrl}
								alt=""
								className="w-[35%] top-[-60%] translate-y-[50%] absolute z-10"
							/>
							<p className="font-bold uppercase text-black-secondary">
								{categorie.name}
							</p>
							<Link to={`/categorie/${categorie.name}`} className="uppercase">
								shop
							</Link>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default MenuMobile
