import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <nav className="container-header">
      <ul className="menu1">
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "active-link" : "none")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "active-link" : "none")}
            to="About"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "active-link" : "none")}
            to="#"
          >
            Services
          </NavLink>
        </li>

        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "active-link" : "none")}
            to="#"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
