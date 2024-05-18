import {Link, useParams} from "react-router-dom"
import {useProducts} from "../context/ProductsContext"

import Spinner from "../components/Spinner"
import {useBasket} from "../context/BasketContext"

import {categories} from "../config"

function Categorie() {
	const currentCategorie = useParams()
	const {products, isLoading} = useProducts()
	const {handleAddToBasket, handleRemoveFromBasket} = useBasket()

	if (isLoading) return <Spinner />
	if (!categories.includes(currentCategorie.categorieName))
		return <div>Page not found</div>

	return (
		<div className="flex gap-2">
			categorie {currentCategorie.categorieName}
			{products.map((product) => (
				<div key={product.id}>
					<Link to={`/product/${product.id}`}>{product.name}</Link>
					<button
						className="bg-orange-main"
						onClick={() => {
							console.log(product)
							handleAddToBasket(product)
						}}>
						add to basket
					</button>
					<button
						className="mt-3 bg-gray-main"
						onClick={() => {
							console.log(product)
							handleRemoveFromBasket(product)
						}}>
						remove from basket
					</button>
				</div>
			))}
		</div>
	)
}

export default Categorie
