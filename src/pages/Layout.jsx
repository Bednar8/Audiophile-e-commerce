import {Outlet} from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import {useMenuMobile} from "../context/MenuMobileContext"
import MenuMobile from "../components/MenuMobile"
import Nav from "../components/Nav"

function Layout() {
	const {isMenuOpen} = useMenuMobile()

	return (
		<>
			<div>
				{isMenuOpen && (
					<div className="fixed inset-0 w-dvw h-dvh bg-[#00000558] z-10"></div>
				)}
				<Nav />
				<Header />
				<MenuMobile />
				<main>
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	)
}

export default Layout
