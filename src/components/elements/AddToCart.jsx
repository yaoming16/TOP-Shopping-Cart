import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import QuantityInput from "./QuantityInput";
import ConfirmationToast from "./ConfirmationToast";

function AddToCart({ itemInfo, modalOpen = true }) {
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setShowToast(false);
  }, [modalOpen]);

  return (
    <div className="add-to-cart">
      <QuantityInput min={1} value={quantity} onChange={setQuantity} />
      <ConfirmationToast
        open={showToast}
        setOpen={setShowToast}
        itemsAmount={quantity}
        itemName={itemInfo.title}
      />
      <button
        onClick={() => {
          cart.addItem(itemInfo, quantity);
          setShowToast(true);
          setQuantity(1);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCart;
