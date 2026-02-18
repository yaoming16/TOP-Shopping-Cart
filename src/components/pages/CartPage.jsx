import NavBar from "../elements/NavBar";
import CartCard from "../elements/CartCard";

import useCart from "../../hooks/useCart";
import { useEffect } from "react";

function CartPage() {
  const cart = useCart();
  let {totalPrice, totalItems} = cart.calculateTotals();

  return (
    <>
      <NavBar />
      <main>
        <h1>Shopping Cart</h1>
        <section>
          <ul>
            {cart.items.map((item) => <CartCard itemInfo={item} key={item.id} />)}
          </ul>
        </section>
        <section>
          <p>Total: {Math.round(totalPrice,2)}</p>
        </section>
        { "Total Itmems     "+ totalItems}
        {"Total Price  " + totalPrice}
      </main>
    </>
  );
}

export default CartPage;
