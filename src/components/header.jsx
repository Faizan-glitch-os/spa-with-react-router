import { NavLink } from "react-router-dom";
import classes from "./header.module.css";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>My Page</li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : null)}
              end
            >
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? classes.active : null)}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
