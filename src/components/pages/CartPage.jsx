import NavBar from "../elements/NavBar";

import useCart from "../../hooks/useCart";

function CartPage() {
  const cart = useCart();
  const {totalPrice, totalItems} = cart.calculateTotals();

  return (
    <>
      <NavBar />
      <main>
        cart
        {cart.items.map((item) => <div>{`Price: ${item.price} --- Quantity: ${item.quantity}`}</div>)}
        { "Total Itmems     "+ totalItems}
        {"Total Price  " + totalPrice}
      </main>
    </>
  );
}

export default CartPage;
