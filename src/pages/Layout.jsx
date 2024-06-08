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

	const {isMenuOpen, setIsMenuOpen} = useMenuMobile()
	const {isBasketOpen, setIsBasketOpen} = useBasket()
	const {isConfirmOrder, setIsConfirmOrder} = useConfirmOrder()

	if (location.pathname === "/checkout")
		document.body.style.backgroundColor = "#F1F1F1"
	else document.body.style.backgroundColor = "#FFF"

	if (isMenuOpen || isConfirmOrder) document.body.style.overflowY = "hidden"
	else document.body.style.overflowY = "auto"

	function check(e) {
		console.log(e.target)
	}

	document.body.addEventListener("click", check)

	return (
		<>
			<ScrollToTop />
			<div className="w-full">
				{(isMenuOpen || isBasketOpen || isConfirmOrder) && (
					<div
						className="fixed inset-0 w-dvw h-dvh bg-[#00000584] z-10"
						onClick={() => {
							setIsBasketOpen(false)
							setIsMenuOpen(false)
							setIsConfirmOrder(false)
						}}></div>
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
