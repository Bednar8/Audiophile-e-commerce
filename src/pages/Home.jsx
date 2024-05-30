import CategorieList from "../components/CategorieList"
import HomeGridProduct from "../components/HomeGridProduct"
import HomeProductSummary from "../components/HomeProductSummary"
import ProductWithBg from "../components/ProductWithBg"
import Header from "../components/Header"

function Home() {
	return (
		<div>
			<Header />
			<CategorieList />
			<ProductWithBg />
			<HomeProductSummary name={"zx7 speaker"} />
			<HomeGridProduct name={"yx1 earphones"} />
		</div>
	)
}

export default Home
