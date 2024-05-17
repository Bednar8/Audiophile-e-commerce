import {useParams} from "react-router-dom"

function Categorie() {
	const currentCategorie = useParams()
	console.log(currentCategorie)
	return <div>categorie {currentCategorie.categorieName}</div>
}

export default Categorie
