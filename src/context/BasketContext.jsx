import {createContext, useContext, useEffect, useState} from "react"
import PropTypes from "prop-types"

export const BasketContext = createContext()

function BasketProvider({children}) {
	const [productsInBasket, setProductsInBasket] = useState([])
	const [isBasketOpen, setIsBasketOpen] = useState(false)
	const [totalPrice, setTotalPrice] = useState(0)

	const productsQuantity = productsInBasket.map((product) => product.quantity)

	const handleAddToBasket = (newProduct, quantity) => {
		setProductsInBasket((productsInBasket) => {
			const productExists = productsInBasket.find(
				(product) => product.id === newProduct.id
			)

			if (productExists) {
				return productsInBasket.map((product) =>
					product.id === newProduct.id
						? {...product, quantity: product.quantity + quantity}
						: product
				)
			}

			return [...productsInBasket, {...newProduct, quantity}]
		})
	}

	const handleRemoveFromBasket = (product) => {
		setProductsInBasket((productsInBasket) =>
			productsInBasket.filter((productInBasket) => productInBasket !== product)
		)
	}

	const handleRemoveAll = () => {
		setProductsInBasket([])
	}

	const handleBasket = () => {
		setIsBasketOpen(!isBasketOpen)
	}

	const closeBasket = () => {
		setIsBasketOpen(false)
	}

	useEffect(() => {
		productsInBasket.reduce(
			(acc, cur) => console.log(acc, cur.price * cur.quantity),
			0
		)
		setTotalPrice(
			productsInBasket.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
		)
	}, [productsInBasket])

	const updateQuantity = (id, quantity) => {
		setProductsInBasket((prevProducts) =>
			prevProducts.map((product) =>
				product.id === id ? {...product, quantity} : product
			)
		)
	}

	return (
		<BasketContext.Provider
			value={{
				productsInBasket,
				handleAddToBasket,
				handleRemoveFromBasket,
				handleRemoveAll,
				handleBasket,
				isBasketOpen,
				setIsBasketOpen,
				closeBasket,
				totalPrice,
				productsQuantity,
				updateQuantity,
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
