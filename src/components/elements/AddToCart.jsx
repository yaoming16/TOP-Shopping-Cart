import { useState } from "react";
import useCart from "../../hooks/useCart";
import QuantityInput from "./QuantityInput";
import ConfirmationToast from "./ConfirmationToast";

function AddToCart({ itemInfo }) {
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const cart = useCart();

  return (
    <div className="add-to-cart">
      <QuantityInput min={1} value={quantity} onChange={setQuantity} />
      <ConfirmationToast open={showToast} setOpen={setShowToast} />
      <button
        onClick={() => {
          cart.addItem(itemInfo, quantity);
          setShowToast(true);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCart;
