import NavBar from "../elements/NavBar";
import CartCard from "../elements/CartCard";

import useCart from "../../hooks/useCart";

import s from "../../styles/cartPage.module.css";

function CartPage() {
  const cart = useCart();
  let {totalPrice, totalItems} = cart.calculateTotals();

  return (
    <>
      <NavBar />
      <main className={s.main}>
        <h1 className={s.title}>Shopping Cart</h1>
        <section>
          <ul className={s.cardsContainer}>
            {cart.items.map((item) => <CartCard itemInfo={item} key={item.id} />)}
          </ul>
        </section>
        <section>
          <p className={s.total}>Total: <span className={s.p}>${Math.round(totalPrice * 100) / 100}</span></p>
        </section>
      </main>
    </>
  );
}

export default CartPage;
