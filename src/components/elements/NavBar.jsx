import { Link, useLocation } from "react-router";

import s from "../../styles/elements/navBar.module.css";

import useCart from "../../hooks/useCart";

function NavBar() {
  const cart = useCart();
  const location = useLocation();
  return (
    <header>
      <nav>
        <ul className={s.nav}>
          <li
            className={`${s.navItem} ${location.pathname === "/" ? s.navItemActive : ""}`}
          >
            <Link className={s.link} to="/">
              Home
            </Link>
          </li>
          <li
            className={`${s.navItem} ${location.pathname === "/shop" ? s.navItemActive : ""}`}
          >
            <Link className={s.link} to="/shop">
              Shop
            </Link>
          </li>
          <li
            className={`${s.navItem} ${location.pathname === "/cart" ? s.navItemActive : ""}`}
          >
            <Link className={s.link} to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
