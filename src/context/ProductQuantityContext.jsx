import {createContext, useContext, useState} from "react"
import PropTypes from "prop-types"

export const ProductQuantityContext = createContext()

function ProductQuantityProvider({children}) {
	const [productQuantity, setProductQuantity] = useState(1)

	const increaseQuantity = () => {
		setProductQuantity((prevQuantity) => prevQuantity + 1)
	}

	const decreaseQuantity = () => {
		setProductQuantity((prevQuantity) =>
			prevQuantity > 1 ? prevQuantity - 1 : 1
		)
	}

	const resetQuantity = () => {
		setProductQuantity(1)
	}

	return (
		<ProductQuantityContext.Provider
			value={{
				productQuantity,
				increaseQuantity,
				decreaseQuantity,
				resetQuantity,
				setProductQuantity,
			}}>
			{children}
		</ProductQuantityContext.Provider>
	)
}

ProductQuantityProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

function useProductQuantity() {
	const context = useContext(ProductQuantityContext)
	if (context === undefined)
		throw new Error(
			"ProductQuantityContext must be used inside ProductQuantityProvider"
		)
	return context
}

export {ProductQuantityProvider, useProductQuantity}
