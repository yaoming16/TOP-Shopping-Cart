import { Link } from "react-router";

import "../../styles/index.css";
import s from "../../styles/homePage.module.css";

import NavBar from "../elements/NavBar";
import Footer from "../elements/Footer";

function HomePage() {
  return (
    <>
      <NavBar active={true} />
      <main>
        <div className={s.presentation}>
          <h1>Dream Shop</h1>
          <h3>
            Dream Shop is a carefully curated marketplace for everyday
            essentials and inspired finds. From home goods and clever gadgets to
            handcrafted accessories, we select quality products at fair prices.
            Enjoy fast shipping, simple returns, and friendly support — discover
            something you'll love today.
          </h3>
          <Link to="/shop">
            <button>Start Shopping</button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
