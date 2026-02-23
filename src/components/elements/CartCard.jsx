import QuantityInput from "./QuantityInput";

import { trashSVG } from "../../utils/svg";

import useCart from "../../hooks/useCart";
import { useEffect, useState } from "react";

import s from "../../styles/elements/cartCard.module.css";

function CartCard({ itemInfo, onRemove }) {
  const [quantity, setQuantity] = useState(itemInfo.quantity);
  const cart = useCart();

  // Calculate subtotal
  const subtotal = Math.round(quantity * itemInfo.price * 100) / 100;

  useEffect(() => {
    cart.setItemQuantity(itemInfo, quantity);
  }, [quantity]);
  return (
    <li className={`${s.container}`}>
      <button
        className={s.removeButton}
        aria-label={`Remove ${itemInfo.title} from cart`}
        type="button"
        onClick={() => {
          cart.removeItem(itemInfo);
          onRemove(itemInfo.title, quantity);
        }}
      >
        {trashSVG}
      </button>
      <article>
        <div className={`${s.flexRow}`}>
          <img
            src={itemInfo.thumbnail}
            alt={itemInfo.title}
            className={s.img}
          />
          <div className={`${s.flexCol}`}>
            <h3>{itemInfo.title}</h3>
          </div>

          <div className={`${s.flexCol}`}>
            <p className={`${s.price}`}>${itemInfo.price}</p>
            <QuantityInput min={1} value={quantity} onChange={setQuantity} />
            <p className={s.p}>
              Subtotal: <span className={s.subtotal}>${subtotal}</span>
            </p>
          </div>
        </div>
      </article>
    </li>
  );
}

export default CartCard;
