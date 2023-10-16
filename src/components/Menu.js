import logo from "../videos/logobon.png";
import { NavLink } from "react-router-dom";
export default function Menu() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="menu">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/agence"
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
            >
              Agence
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/expertise"
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
            >
              Expertise
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/actualite"
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
            >
              Actualite
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
