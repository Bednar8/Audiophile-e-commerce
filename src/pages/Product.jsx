import {useParams} from "react-router-dom"
import {useProducts} from "../context/ProductsContext"
import Spinner from "../components/Spinner"

function Product() {
	const params = useParams()
	const {products, isLoading} = useProducts()
	const currentProduct = products.filter(
		(product) => product.id === params.productId
	)[0]

	if (isLoading) return <Spinner />

	console.log(currentProduct)

	return <div>product{params.productId}</div>
}

export default Product
