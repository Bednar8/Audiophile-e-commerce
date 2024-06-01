import {useParams} from "react-router-dom"
import {useProducts} from "../context/ProductsContext"
import Spinner from "../components/Spinner"

import ProductMainOverview from "../components/ProductMainOverview"
import Features from "../components/Features"
import InTheBox from "../components/InTheBox"
import ProductPageImages from "../components/ProductPageImages"

function Product() {
	const params = useParams()
	const {products, isLoading} = useProducts()
	const currentProduct = products.filter(
		(product) => product.id === params.productId
	)[0]

	if (isLoading) return <Spinner />

	console.log(currentProduct)

	return (
		<div>
			<div className="h-[100px] bg-black-secondary w-full"></div>
			product{params.productId}
			<div className="max-w-[1200px] mx-auto">
				{currentProduct && (
					<>
						<ProductMainOverview product={currentProduct} />
						<div className="flex flex-col justify-center gap-16 xl:flex-row">
							<Features product={currentProduct} />
							<InTheBox product={currentProduct} />
							<ProductPageImages product={currentProduct} />
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Product
