import {createContext, useContext, useState} from "react"
import PropTypes from "prop-types"

export const MenuMobileContext = createContext()

function MenuMobileProvider({children}) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	return (
		<MenuMobileContext.Provider
			value={{handleMenu, isMenuOpen, setIsMenuOpen, closeMenu}}>
			{children}
		</MenuMobileContext.Provider>
	)
}

MenuMobileProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

function useMenuMobile() {
	const context = useContext(MenuMobileContext)
	if (context === undefined)
		throw new Error("BasketContext must be used inside BasketProvider")
	return context
}

export {MenuMobileProvider, useMenuMobile}
