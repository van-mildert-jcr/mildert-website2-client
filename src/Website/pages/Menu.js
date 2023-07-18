import { Outlet, Link } from "react-router-dom";

import "../css/menu.css";

const Menu = () => {
	return (
		// <ul>
		// 	<li>
		// 		<a class="active" href="#home">
		// 			Home
		// 		</a>
		// 	</li>
		// 	<li>
		// 		<a href="#news">News</a>
		// 	</li>
		// 	<li>
		// 		<a href="#contact">Contact</a>
		// 	</li>
		// </ul>
		<>
			<nav className={"hnav"}>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/list">List</Link>
					</li>
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
};

export default Menu;
