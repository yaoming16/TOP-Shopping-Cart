import { useState } from "react";
import useCart from "../../hooks/useCart";

function AddToCart({itemInfo}) {

  const [quantity , setQuantity] = useState(1);
  const cart = useCart();


  return (
    <div>
      <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}></input>
      <button onClick={() => cart.addItem(itemInfo, quantity)}>Add to Cart</button>
    </div>
  )
}

export default AddToCart;