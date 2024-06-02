import {Outlet} from "react-router-dom"
import Footer from "../components/Footer"

import {useMenuMobile} from "../context/MenuMobileContext"
import Nav from "../components/Nav"
import CategorieList from "../components/CategorieList"
import AboutAudiphile from "../components/AboutAudiphile"
import ScrollToTop from "../components/ScrollToTop"

function Layout() {
	const {isMenuOpen} = useMenuMobile()

	return (
		<>
			<ScrollToTop />
			<div className="w-full">
				{isMenuOpen && (
					<div className="fixed inset-0 w-dvw h-dvh bg-[#00000558] z-10"></div>
				)}
				<Nav />
				<CategorieList isMenuMobile={true} />

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
