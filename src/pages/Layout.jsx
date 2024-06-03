import {Outlet} from "react-router-dom"
import Footer from "../components/Footer"

import {useMenuMobile} from "../context/MenuMobileContext"
import Nav from "../components/Nav"
import CategorieList from "../components/CategorieList"
import AboutAudiphile from "../components/AboutAudiphile"
import ScrollToTop from "../components/ScrollToTop"
import Basket from "../components/Basket"
import {useBasket} from "../context/BasketContext"

function Layout() {
	const {isMenuOpen} = useMenuMobile()
	const {isBasketOpen} = useBasket()

	if (isMenuOpen || isBasketOpen) document.body.style.overflowY = "hidden"
	else document.body.style.overflowY = "auto"

	return (
		<>
			<ScrollToTop />
			<div className="w-full">
				{(isMenuOpen || isBasketOpen) && (
					<div className="fixed inset-0 w-dvw h-dvh bg-[#00000584] z-10"></div>
				)}
				<Nav />
				<CategorieList isMenuMobile={true} />
				<Basket />

				<main>
					<Outlet />
				</main>
				<AboutAudiphile />
				<Footer />
			</div>
		</>
	)
}

export default Layout
