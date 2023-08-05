import Link from "next/link";

import "./Navbar.css";


export default function Navbar() {
	return (
		<>
			<nav className={"hnav"}>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/list">List</Link>
					</li>
					<li>
						<Link href="/dashboard">Dashboard</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};
