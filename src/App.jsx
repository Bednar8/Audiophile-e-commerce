import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Layout from "./pages/Layout"

import Home from "./pages/Home"

import NotFoundPage from "./pages/NotFoundPage"
import Product from "./pages/Product"
import Basket from "./pages/Basket"
import Categorie from "./pages/Categorie"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [
			{path: "/", element: <Home />},
			{path: "/categorie/:categorieName", element: <Categorie />},
			{path: "product/:productId", element: <Product />},
			{path: "basket", element: <Basket />},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
