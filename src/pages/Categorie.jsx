import {useParams} from "react-router-dom"
import {useProducts} from "../context/ProductsContext"

import Spinner from "../components/Spinner"
// import {useBasket} from "../context/BasketContext"

import {categories} from "../config"
import ProductOverview from "../components/ProductOverview"
import CategorieList from "../components/CategorieList"

function Categorie() {
	const currentCategorie = useParams()
	const {products, isLoading} = useProducts()
	// const {handleAddToBasket, handleRemoveFromBasket} = useBasket()

	if (isLoading) return <Spinner />
	if (
		!categories.some(
			(categorie) => categorie.name !== currentCategorie.categorieName
		)
	)
		return <div>Page not found</div>

	return (
		<div>
			<div className="h-[200px] md:h-[330px] bg-black-secondary text-white flex justify-center items-end">
				<h2 className="mb-8 text-3xl font-bold tracking-wide uppercase md:mb-[6.5rem] md:text-4xl">
					{currentCategorie.categorieName}
				</h2>
			</div>
			<div className="mx-auto max-w-[1200px] flex flex-col items-center justify-center">
				{products
					.filter(
						(product) => product.category == currentCategorie.categorieName
					)
					.sort((a, b) => {
						if (a.new === true && b.new !== true) {
							return -1
						}
						if (a.new !== true && b.new === true) {
							return 1
						}
						return 0
					})
					.map((product, i) => (
						<ProductOverview key={i} product={product} index={i} />
					))}
			</div>
			<CategorieList />
		</div>
	)
}

export default Categorie
