import QuantityInput from "./QuantityInput";

import { closeSVG } from "../../utils/svg";

import useCart from "../../hooks/useCart";
import { useEffect, useState } from "react";

import s from "../../styles/elements/cartCard.module.css";

function CartCard({ itemInfo }) {
  const [quantity, setQuantity] = useState(itemInfo.quantity);
  const cart = useCart();

  // Calculate subtotal
  const subtotal = Math.round(quantity * itemInfo.price, 2);

  useEffect(() => {
    cart.setItemQuantity(itemInfo, quantity);
  }, [quantity]);
  return (
    <li>
      <button
        aria-label={`Remove ${itemInfo.title} from cart`}
        type="button"
        onClick={() => cart.removeItem(itemInfo)}
      >
        {closeSVG}
      </button>
      <article>
        <div className={`${s.container} ${s.flexRow}`}>
          <img src={itemInfo.thumbnail} alt={itemInfo.title} className={s.img}/>
          <div className={`${s.flexCol}`}>
            <h3>{itemInfo.title}</h3>
            <p>${itemInfo.price}</p>
          </div>

          <div>
            <QuantityInput min={1} value={quantity} onChange={setQuantity} />
            <p>Subtotal: ${subtotal}</p>
          </div>
        </div>
      </article>
    </li>
  );
}

export default CartCard;
