import { useEffect } from "react";
import { Link } from "react-router";

import s from "../../styles/elements/confirmationToast.module.css";

import { closeSVG } from "../../utils/svg";

function ConfirmationToast({
  open = false,
  setOpen,
  add = true,
  itemsAmount = null,
  itemName = null,
}) {
  useEffect(() => {
    if (!open) return;

    const timeOutId = setTimeout(() => {
      setOpen(false);
    }, 4000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [open]);

  return (
    <div className={`${open ? s.show : null} ${s.container} ${add ? s.add : s.remove}`}>
      <button className={s.closeBtn} onClick={() => setOpen(false)}>
        {closeSVG}
      </button>
      <div>
        <p>
          {itemsAmount ? (
            <span className={s.highlight}>{itemsAmount}</span>
          ) : null}{" "}
          {itemName ? (
            <span className={s.highlight}>{itemName}</span>
          ) : (
            "An item was"
          )}{" "}
          {add ? "added to" : "removed from"} the cart
        </p>
      </div>
      <Link to="/cart">
        <button className={s.cartBtn}>Cart</button>
      </Link>
    </div>
  );
}

export default ConfirmationToast;
