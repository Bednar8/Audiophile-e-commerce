import {createContext, useContext, useEffect, useState} from "react"
import PropTypes from "prop-types"

export const ProductsContext = createContext()

function ProductsProvider({children}) {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(function () {
		async function fetchProducts() {
			try {
				setIsLoading(true)
				const res = await fetch("http://localhost:3001/products")
				if (!res.ok) throw new Error("Network response was not ok")
				const data = await res.json()
				console.log(data)
				setProducts(data)
			} catch (error) {
				console.error("Error fetching products:", error)
			} finally {
				setIsLoading(false)
			}
		}
		fetchProducts()
	}, [])

	return (
		<ProductsContext.Provider value={{products, isLoading}}>
			{children}
		</ProductsContext.Provider>
	)
}

ProductsProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

function useProducts() {
	const context = useContext(ProductsContext)
	if (context === undefined)
		throw new Error("ProductsContext must be used inside ProductsProvider")
	return context
}

export {ProductsProvider, useProducts}
