import {Outlet} from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import {useMenuMobile} from "../context/MenuMobileContext"
import MenuMobile from "../components/MenuMobile"

function Layout() {
	const {isMenuOpen} = useMenuMobile()

	return (
		<>
			{isMenuOpen && <MenuMobile />}
			<div
				className={
					isMenuOpen
						? "overflow-hidden w-dvw h-dvh"
						: "overflow-y-scroll w-dvw h-dvh"
				}>
				{isMenuOpen && (
					<div className="fixed inset-0 w-dvw h-dvh bg-[#00000558] z-10"></div>
				)}
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
