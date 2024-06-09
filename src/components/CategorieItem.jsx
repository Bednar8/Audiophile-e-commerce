import {Link} from "react-router-dom"

import arrowIcon from "/src/assets/shared/desktop/icon-arrow-right.svg"
import {useMenuMobile} from "../context/MenuMobileContext"

function CategorieItem({categorie}) {
	const {closeMenu} = useMenuMobile()
	return (
		<div className="relative flex items-center justify-center mx-4 h-[150px] my-10 last:mb-12 w-full max-md:first:mt-16">
			<Link
				to={`/categorie/${categorie.name}`}
				className="z-0 flex flex-col items-center justify-end w-full h-full mx-4 my-6 category-item text-black-secondary bg-gray-main last:mb-0 rounded-xl"
				onClick={closeMenu}>
				<img
					src={categorie.imageUrl}
					alt=""
					className="absolute top-[-50%] translate-y-[30%] w-[130px] md:w-[160px] md:translate-y-[10%]"
				/>
				<p className="mb-5 font-bold uppercase text-black-secondary">
					{categorie.name}
				</p>
				<p className="flex items-center mb-4 uppercase">
					<span className="category-span">shop</span>{" "}
					<img src={arrowIcon} alt="" className="ml-2" />
				</p>
			</Link>
		</div>
	)
}

export default CategorieItem
