import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Layout from "./pages/Layout"

import Home from "./pages/Home"

import NotFoundPage from "./pages/NotFoundPage"
import Product from "./pages/Product"
import Checkout from "./pages/Checkout"
import Categorie from "./pages/Categorie"
import {ProductsProvider} from "./context/ProductsContext"
import {BasketProvider} from "./context/BasketContext"
import {MenuMobileProvider} from "./context/MenuMobileContext"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [
			{path: "/", element: <Home />},
			{path: "/categorie/:categorieName", element: <Categorie />},
			{path: "/product/:productSlug", element: <Product />},
			{path: "/checkout", element: <Checkout />},
		],
	},
])

function App() {
	return (
		<ProductsProvider>
			<BasketProvider>
				<MenuMobileProvider>
					<RouterProvider router={router} />
				</MenuMobileProvider>
			</BasketProvider>
		</ProductsProvider>
	)
}

export default App
