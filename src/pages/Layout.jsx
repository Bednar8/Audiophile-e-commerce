import {Outlet} from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import {useMenuMobile} from "../context/MenuMobileContext"
import Nav from "../components/Nav"
import CategorieList from "../components/CategorieList"

function Layout() {
	const {isMenuOpen} = useMenuMobile()

	return (
		<>
			<div className="w-full">
				{isMenuOpen && (
					<div className="fixed inset-0 w-dvw h-dvh bg-[#00000558] z-10"></div>
				)}
				<Nav />
				<CategorieList isMenuMobile={true} />
				<Header />
				<main>
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	)
}

export default Layout
