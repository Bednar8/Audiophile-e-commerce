import {Outlet, useLocation} from "react-router-dom"
import Footer from "../components/Footer"

import {useMenuMobile} from "../context/MenuMobileContext"
import Nav from "../components/Nav"
import CategorieList from "../components/CategorieList"
import AboutAudiphile from "../components/AboutAudiphile"
import ScrollToTop from "../components/ScrollToTop"
import Basket from "../components/Basket"
import {useBasket} from "../context/BasketContext"
import {useConfirmOrder} from "../context/ConfirmContext"

function Layout() {
	const location = useLocation()

	const {isMenuOpen} = useMenuMobile()
	const {isBasketOpen} = useBasket()
	const {isConfirmOrder} = useConfirmOrder()

	if (location.pathname === "/checkout")
		document.body.style.backgroundColor = "#F1F1F1"
	else document.body.style.backgroundColor = "#FFF"

	if (isMenuOpen || isBasketOpen || isConfirmOrder)
		document.body.style.overflowY = "hidden"
	else document.body.style.overflowY = "auto"

	return (
		<>
			<ScrollToTop />
			<div className="w-full">
				{(isMenuOpen || isBasketOpen || isConfirmOrder) && (
					<div className="fixed inset-0 w-dvw h-dvh bg-[#00000584] z-10"></div>
				)}
				<Nav />
				<CategorieList isMenuMobile={true} />
				<Basket />

				<main>
					<Outlet />
				</main>
				{location.pathname !== "/checkout" && <AboutAudiphile />}

				<Footer />
			</div>
		</>
	)
}

export default Layout
