import {Link, NavLink} from "react-router-dom"
import {useEffect, useState} from "react"

import {categories} from "../config"

import logoImg from "../assets/shared/desktop/logo.svg"
import burgerIcon from "../assets/shared/tablet/icon-hamburger.svg"
import cartIcon from "../assets/shared/desktop/icon-cart.svg"
import {useMenuMobile} from "../context/MenuMobileContext"
import {useBasket} from "../context/BasketContext"

function Nav() {
	const {handleMenu} = useMenuMobile()
	const {handleBasket} = useBasket()
	const [isNavShow, setIsNavShow] = useState(false)
	const [lastYPos, setLastYPos] = useState(0)
	const [isScrollZero, setIsScrollZero] = useState(true)

	function handleScroll() {
		const currentScrollY = window.scrollY

		if (currentScrollY < 15) return setIsScrollZero(true)
		else setIsScrollZero(false)

		if (currentScrollY > lastYPos) {
			setIsNavShow(false)
		} else {
			setIsNavShow(true)
		}
		setLastYPos(currentScrollY)
	}

	useEffect(
		function () {
			window.addEventListener("scroll", handleScroll)

			return () => window.removeEventListener("scroll", handleScroll)
		},
		[lastYPos]
	)

	return (
		<>
			<nav
				className={`${
					isScrollZero
						? "top-0 bg-transparent"
						: isNavShow
						? "top-0 bg-black-secondary"
						: "top-[-100px]"
				}  nav fixed left-0 items-center text-white h-[100px] w-full z-30`}>
				<div
					className={`${
						isScrollZero ? "after:w-full  after:px-4" : "after:w-0"
					} relative lg:max-w-[1200px] md:max-w-[760px] h-full mx-auto flex justify-between after:content-[''] after:absolute  after:transition-[width] after:bottom-0 after:left-0 after:bg-[#979797] after:h-[1px] after:duration-300 after:z-0`}>
					<button
						className="p-3 pr-4 m-2 md:mr-10 lg:hidden"
						onClick={handleMenu}>
						<img src={burgerIcon} alt="" className="w-7" />
					</button>
					<div className="flex items-center justify-center w-full h-full md:justify-start lg:w-max lg:p-3 lg:mx-2 lg:pl-0">
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
					<button className="p-3 pl-4 m-2 lg:pr-0" onClick={handleBasket}>
						<img src={cartIcon} alt="" className="w-8" />
					</button>
				</div>
			</nav>
		</>
	)
}

export default Nav
