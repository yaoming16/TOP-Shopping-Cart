import { Link } from "react-router";

import s from "../styles/navBar.module.css"

function NavBar(active) {
  return (
    <header>
      <nav>
        <ul className={s.nav}>
          <li className={s.navItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={s.navItem}>
            <Link to="/cart" >Cart</Link>
          </li>
          <li className={s.navItem}>
            <Link to="/shop" >Shop</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
