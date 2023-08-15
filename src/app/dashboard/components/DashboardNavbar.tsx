import Link from "next/link";

import "./DashboardNavbar.css";

const Menu = () => {
  return (
    <>
      <nav className="vnav">
        <ul>
          <li>
            <Link href="/Dashboard/">Hub</Link>
          </li>
          <li>
            <Link href="/Dashboard/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
