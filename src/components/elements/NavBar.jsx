import { Link, useLocation } from "react-router";

import s from "../../styles/elements/navBar.module.css";

import useCart from "../../hooks/useCart";

import { cartSVG } from "../../utils/svg.jsx";

function NavBar() {
  const cart = useCart();
  const location = useLocation();
  return (
    <header>
      <nav className={s.nav}>
        <h2>DreamShop</h2>
        <ul className={s.navUl}>
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
              <span className={s.cartSVG}>
                {cartSVG}
                <span className={s.totalsCart}>
                  {cart.calculateTotals().totalItems}
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
