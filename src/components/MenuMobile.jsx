import {Link} from "react-router-dom"
import {categories} from "../config"

// import earphonesIcon from "../assets/shared/desktop/image-category-thumbnail-earphones.png"
// import headphonesIcon from "../assets/shared/desktop/image-category-thumbnail-headphones.png"
// import speakersIcon from "../assets/shared/desktop/image-category-thumbnail-speakers.png"

function MenuMobile() {
	return (
		<div className="absolute top-[100px] z-30 w-full bg-white h-max p-7 overflow-y-scroll">
			<ul>
				{categories.map((categorie, i) => (
					<li key={i}>
						<img src={categorie.imageUrl} alt="" />
						<Link to={`/categorie/${categorie.name}`}>{categorie.name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default MenuMobile
