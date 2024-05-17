import {Link, NavLink} from "react-router-dom"

function Nav() {
	// const navElements = ["home", "headphones", "speakers", "earphones", "basket"]
	const categories = ["home", "headphones", "speakers", "earphones"]
	return (
		<nav className="flex gap-2">
			<div>logo</div>
			<ul className="flex gap-2">
				{categories.map((navEl) => (
					<li key={navEl}>
						<NavLink
							to={navEl === "home" ? "/" : `categorie/${navEl}`}
							className={({isActive}) => (isActive ? "text-orange-main" : "")}>
							{navEl}
						</NavLink>
					</li>
				))}
			</ul>
			<button>
				<Link to={"/basket"}>basket</Link>
			</button>
		</nav>
	)
}

export default Nav
