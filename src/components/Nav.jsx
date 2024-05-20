import {Link, NavLink} from "react-router-dom"

import {categories} from "../config"
import logoImg from "../assets/shared/desktop/logo.svg"
import burgerIcon from "../assets/shared/tablet/icon-hamburger.svg"
import cartIcon from "../assets/shared/desktop/icon-cart.svg"
import {useMenuMobile} from "../context/MenuMobileContext"
import MenuMobile from "./MenuMobile"

function Nav() {
	const {handleMenu} = useMenuMobile()

	return (
		<>
			<nav className="fixed flex justify-between text-white h-[100px]  border-b-[1px] border-b-[#979797] w-full max-sm:m-0 z-40">
				<MenuMobile />
				<button
					className="pr-4 md:mr-10 lg:hidden max-sm:p-3 max-sm:m-2"
					onClick={handleMenu}>
					<img src={burgerIcon} alt="" className="w-8" />
				</button>
				<div className="flex items-center justify-center w-full h-full md:justify-start lg:w-max">
					<Link to={"/"}>
						<img src={logoImg} alt="Logo audiophile" />
					</Link>
				</div>
				<ul className="items-center justify-center hidden uppercase lg:flex gap-9">
					<li>
						<NavLink
							to={"/"}
							className={({isActive}) =>
								isActive
									? "text-orange-main hover:text-orange-main transition-colors"
									: "hover:text-orange-main transition-colors"
							}>
							home
						</NavLink>
					</li>
					{categories.map((navEl, i) => (
						<li key={i}>
							<NavLink
								to={`categorie/${navEl.name}`}
								className={({isActive}) =>
									isActive
										? "text-orange-main hover:text-orange-main transition-colors"
										: "hover:text-orange-main transition-colors"
								}>
								{navEl.name}
							</NavLink>
						</li>
					))}
				</ul>
				<button className="pl-4 max-sm:p-3 max-sm:m-2">
					<Link to={"/basket"}>
						<img src={cartIcon} alt="" className="w-10" />
					</Link>
				</button>
			</nav>
		</>
	)
}

export default Nav
