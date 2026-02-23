import NavBar from "../elements/NavBar";
import CartCard from "../elements/CartCard";

import useCart from "../../hooks/useCart";
import { useState } from "react";

import s from "../../styles/cartPage.module.css";
import ConfirmationToast from "../elements/ConfirmationToast";

function CartPage() {
  const cart = useCart();
  const [openToast, setOpenToast] = useState(false);
  const [toastInfo, setToastInfo] = useState({
    itemName: "",
    itemAmount: 0,
  });
  let { totalPrice, totalItems } = cart.calculateTotals();

  function onCardRemove(itemName, itemAmount) {
    setOpenToast(true);
    setToastInfo({
      itemName: itemName,
      itemAmount: itemAmount,
    });
  }

  return (
    <>
      <NavBar />
      <main className={s.main}>
        <h1 className={s.title}>Shopping Cart</h1>
        <section>
          <ul className={s.cardsContainer}>
            {cart.items.map((item) => (
              <CartCard itemInfo={item} key={item.id} onRemove={onCardRemove} />
            ))}
          </ul>
        </section>
        <section>
          <p className={s.total}>
            Total:{" "}
            <span className={s.p}>${Math.round(totalPrice * 100) / 100}</span>
          </p>
        </section>
        <ConfirmationToast
          open={openToast}
          setOpen={setOpenToast}
          add={false}
          itemsAmount={toastInfo.itemAmount}
          itemName={toastInfo.itemName}
        />
      </main>
    </>
  );
}

export default CartPage;
