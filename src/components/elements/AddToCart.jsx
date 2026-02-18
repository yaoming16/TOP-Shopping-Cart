import { useState } from "react";
import useCart from "../../hooks/useCart";
import QuantityInput from "./QuantityInput";

function AddToCart({itemInfo}) {

  const [quantity , setQuantity] = useState(1);
  const cart = useCart();

  return (
    <div className="add-to-cart">
      <QuantityInput min={1} value={quantity} onChange={setQuantity}  />
      <button onClick={() => cart.addItem(itemInfo, quantity)}>Add to Cart</button>
    </div>
  )
}

export default AddToCart;