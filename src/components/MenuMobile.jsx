import {Link} from "react-router-dom"
import {categories} from "../config"

function MenuMobile() {
	return (
		<div className="fixed top-[100px] z-30 w-full bg-white h-max p-7">
			<ul>
				{categories.map((categorie, i) => (
					<li key={i}>
						<Link to={`/categorie/${categorie}`}>{categorie}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default MenuMobile
