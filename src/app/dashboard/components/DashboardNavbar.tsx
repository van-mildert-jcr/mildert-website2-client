import Link from "next/link";

import "./DashboardNavbar.css";

const Menu = () => {
  return (
    <>
      <nav className="vnav">
        <ul>
          <li>
            <Link href="/dashboard/">Hub</Link>
          </li>
          <li>
            <Link href="/dashboard/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
