import {createContext, useContext, useState} from "react"
import PropTypes from "prop-types"

export const BasketContext = createContext()

function BasketProvider({children}) {
	const [productsInBasket, setProductsInBasket] = useState([])
	const handleAddToBasket = (product) => {
		setProductsInBasket((productsInBasket) => [...productsInBasket, product])
	}

	const handleRemoveFromBasket = (product) => {
		setProductsInBasket((productsInBasket) =>
			productsInBasket.filter((productInBasket) => productInBasket !== product)
		)
	}

	return (
		<BasketContext.Provider
			value={{productsInBasket, handleAddToBasket, handleRemoveFromBasket}}>
			{children}
		</BasketContext.Provider>
	)
}

BasketProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

function useBasket() {
	const context = useContext(BasketContext)
	if (context === undefined)
		throw new Error("BasketContext must be used inside BasketProvider")
	return context
}

export {BasketProvider, useBasket}