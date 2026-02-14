import QuantityInput from "./QuantityInput";

import { closeSVG } from "../../utils/svg";

import useCart from "../../hooks/useCart";

function CartCard(itemInfo) {
  const cart = useCart();
  return (
    <li>
      <article>
        <button type="button">{closeSVG}</button>
        <img src={itemInfo.thumbnail} alt={itemInfo.title} />
        <h3>{itemInfo.title}</h3>
      </article>
    </li>
  );
}

export default CartCard;
