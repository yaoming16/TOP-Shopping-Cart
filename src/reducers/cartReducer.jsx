import { findItemById } from "../utils/utils";

function cartReducer(state, action) {
  let foundItem = findItemById(state.items, action.payload.id);
  let index = state.items.indexOf(foundItem);
  switch (action.type) {
    case "ADD_ITEM":
      // If the item is already in the cart
      if (foundItem) {
        const items = state.items.map((it, i) =>
          i === index ? { ...it, quantity: it.quantity + action.quantity } : it,
        );
        return { ...state, items };
      }
      // if item not in the cart
      return {
        ...state,
        items: [
          ...state.items,
          { ...action.payload, quantity: action.quantity },
        ],
      };

    case "REMOVE_ALL_ITEMS":
      if (!foundItem) return state;
      const items = state.items.filter((_, i) => i !== index);
      return { ...state, items };

    default:
      return state;
  }
}

export default cartReducer;
