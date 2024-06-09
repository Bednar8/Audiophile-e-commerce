import {createContext, useContext, useState} from "react"
import PropTypes from "prop-types"

export const BasketContext = createContext()

function BasketProvider({children}) {
	const [productsInBasket, setProductsInBasket] = useState([])
	const [isBasketOpen, setIsBasketOpen] = useState(false)

	const handleAddToBasket = (product, quantity = 3) => {
		console.log(product)
		console.log(quantity)
		setProductsInBasket((productsInBasket) => {
			if (productsInBasket.includes(product)) {
				product.quantity += quantity
				return [...productsInBasket]
			}
			return [...productsInBasket, product]
		})
	}

	const handleRemoveFromBasket = (product) => {
		setProductsInBasket((productsInBasket) =>
			productsInBasket.filter((productInBasket) => productInBasket !== product)
		)
	}

	const handleBasket = () => {
		setIsBasketOpen(!isBasketOpen)
	}

	const closeBasket = () => {
		setIsBasketOpen(false)
	}

	return (
		<BasketContext.Provider
			value={{
				productsInBasket,
				handleAddToBasket,
				handleRemoveFromBasket,
				handleBasket,
				isBasketOpen,
				setIsBasketOpen,
				closeBasket,
			}}>
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
