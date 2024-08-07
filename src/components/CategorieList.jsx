import {categories} from "../config"
import {useMenuMobile} from "../context/MenuMobileContext"

import CategorieItem from "./CategorieItem"

function CategorieList({isMenuMobile = false}) {
	const {isMenuOpen, setIsMenuOpen} = useMenuMobile()

	return (
		<>
			{isMenuMobile && (
				<div
					className={`${
						isMenuOpen && "left-[0]"
					} menu-container max-w-[1200px] mx-auto max-h-[750px] fixed left-[-120%] top-[100px] z-10  w-full transition-all overflow-y-auto`}
					onClick={() => setIsMenuOpen(false)}>
					<div
						className="absolute z-30 flex flex-col items-center w-full bg-white h-max rounded-br-xl rounded-bl-xl md:flex-row md:pb-10 md:pt-16"
						onClick={(e) => e.stopPropagation()}>
						{categories.map((categorie, i) => (
							<CategorieItem categorie={categorie} key={i} />
						))}
					</div>
				</div>
			)}
			{!isMenuMobile && (
				<div
					className={`max-h-[750px] relative  w-full transition-all max-w-[1200px] mx-auto my-8 `}>
					<div className="flex flex-col items-center w-full bg-white h-max rounded-br-xl rounded-bl-xl md:flex-row md:pb-10 md:pt-16">
						{categories.map((categorie, i) => (
							<CategorieItem categorie={categorie} key={i} />
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default CategorieList
