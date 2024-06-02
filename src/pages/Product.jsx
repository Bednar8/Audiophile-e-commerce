import {useParams} from "react-router-dom"
import {useProducts} from "../context/ProductsContext"
import Spinner from "../components/Spinner"

import ProductMainOverview from "../components/ProductMainOverview"
import Features from "../components/Features"
import InTheBox from "../components/InTheBox"
import ProductGallery from "../components/ProductGallery"
import OtherProducts from "../components/OtherProducts"
import CategorieList from "../components/CategorieList"

function Product() {
	const params = useParams()
	const {products, isLoading} = useProducts()
	const currentProduct = products.filter(
		(product) => product.slug === params.productSlug
	)[0]

	if (isLoading) return <Spinner />

	return (
		<div>
			<div className="h-[100px] bg-black-secondary w-full"></div>
			<div className="max-w-[1200px] mx-auto">
				{currentProduct && (
					<>
						<ProductMainOverview product={currentProduct} />
						<div className="flex flex-col justify-center gap-16 xl:flex-row">
							<Features product={currentProduct} />
							<InTheBox product={currentProduct} />
						</div>
						<ProductGallery product={currentProduct} />
						<OtherProducts product={currentProduct} />
						<CategorieList />
					</>
				)}
			</div>
		</div>
	)
}

export default Product
