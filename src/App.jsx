import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Layout from "./pages/Layout"

import Home from "./pages/Home"

import NotFoundPage from "./pages/NotFoundPage"
import Product from "./pages/Product"
import Basket from "./pages/Basket"
import Categorie from "./pages/Categorie"
import {ProductsProvider} from "./context/ProductsContext"
import {BasketProvider} from "./context/BasketContext"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [
			{path: "/", element: <Home />},
			{path: "/categorie/:categorieName", element: <Categorie />},
			{path: "/product/:productId", element: <Product />},
			{path: "/basket", element: <Basket />},
		],
	},
])

function App() {
	return (
		<ProductsProvider>
			<BasketProvider>
				<RouterProvider router={router} />
			</BasketProvider>
		</ProductsProvider>
	)
}

export default App
