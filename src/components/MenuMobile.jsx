import {categories} from "../config"
import {useMenuMobile} from "../context/MenuMobileContext"

import MenuMobileItem from "./MenuMobileItem"

function MenuMobile() {
	const {isMenuOpen} = useMenuMobile()

	if (isMenuOpen) document.body.style.overflowY = "hidden"
	else document.body.style.overflowY = "auto"

	return (
		<div
			className={`${
				isMenuOpen && "left-[0]"
			} menu-container max-h-[750px] fixed left-[-120%] top-[100px] z-30  w-full transition-all overflow-y-auto`}>
			<div className="absolute items-center w-full bg-white h-max">
				{categories.map((categorie, i) => (
					<MenuMobileItem categorie={categorie} key={i} />
				))}
			</div>
		</div>
	)
}

export default MenuMobile
