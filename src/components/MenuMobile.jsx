import {categories} from "../config"
import {useMenuMobile} from "../context/MenuMobileContext"

import CategorieItem from "./CategorieItem"

function MenuMobile() {
	const {isMenuOpen} = useMenuMobile()

	if (isMenuOpen) document.body.style.overflowY = "hidden"
	else document.body.style.overflowY = "auto"

	return (
		<div
			className={`${
				isMenuOpen && "left-[0]"
			} menu-container max-h-[750px] fixed left-[-120%] top-[100px] z-30  w-full transition-all overflow-y-auto`}>
			<div className="absolute flex flex-col items-center w-full bg-white h-max rounded-br-xl rounded-bl-xl md:flex-row md:py-10">
				{categories.map((categorie, i) => (
					<CategorieItem categorie={categorie} key={i} />
				))}
			</div>
		</div>
	)
}

export default MenuMobile
