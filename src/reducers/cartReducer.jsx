import { findItemById } from "../utils/utils";

function cartReducer(state, action) {
  switch (action.type) {

    case "ADD_ITEM":
      let foundItem = findItemById(state.items, action.payload.id);

      // If the item is already in the cart 
      if (foundItem) {
        let index = state.items.indexOf(foundItem);
        state.items[index].quantity += action.quantity;
        return {
          ...state
        }
      }

      // if findItemById returned null (didnt find the item the user wants to add already in the cart)
      if (!foundItem) {
        return {
          ...state,
          items: [
            ...state.items,
            { ...action.payload, quantity: action.quantity },
          ],
        };
      }

  }
}

export default cartReducer;
