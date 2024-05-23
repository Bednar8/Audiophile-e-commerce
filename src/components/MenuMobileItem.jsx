import {Link} from "react-router-dom"

function MenuMobileItem({categorie}) {
	return (
		<div className="flex items-center justify-center">
			<div className="z-0 flex flex-col items-center justify-center w-full my-6 text-black-secondary bg-gray-main">
				<img src={categorie.imageUrl} alt="" className="w-[35%]" />
				<p className="font-bold uppercase text-black-secondary">
					{categorie.name}
				</p>
				<Link to={`/categorie/${categorie.name}`} className="uppercase">
					shop
				</Link>
			</div>
		</div>
	)
}

export default MenuMobileItem
