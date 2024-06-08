import {useParams} from "react-router-dom"
import {useProducts} from "../context/ProductsContext"
import Spinner from "../components/Spinner"

import ProductMainOverview from "../components/ProductMainOverview"
import Features from "../components/Features"
import InTheBox from "../components/InTheBox"
import ProductGallery from "../components/ProductGallery"
import OtherProducts from "../components/OtherProducts"
import CategorieList from "../components/CategorieList"
import ButtonGoBack from "../components/ButtonGoBack"

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
				<div className="mx-4 mt-4 md:mx-8 md:mt-8 xl:mt-16">
					<ButtonGoBack />
				</div>
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
