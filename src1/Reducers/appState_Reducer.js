import { CHANGE_ITEM_QUANTITY } from "../ActionCreators/actionNames";

const initialState = {
  items: [
    {
      id: 1,
      name: "item 1",
      price: 10
    },
    {
      id: 2,
      name: "item 2",
      price: 20
    },
    {
      id: 3,
      name: "item 3",
      price: 30
    },
    {
      id: 4,
      name: "item 4",
      price: 40
    }
  ],
  cartItems: [
    {
      id: 2,
      name: "item 2",
      price: 20,
      quantity: 3
    },
    {
      id: 3,
      name: "item 3",
      price: 30,
      quantity: 4
    },
  ],
  totalValue: 100
}

export default function appState(state = initialState, action) {
  let newState = {...state};
  switch(action.type) {
    case CHANGE_ITEM_QUANTITY:
      let { cartItems, items } = newState;
      let isItemPresent = false;
      for(let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === action.id) {
          if (!action.isInput) {
            cartItems[i].quantity = +cartItems[i].quantity + +action.value;
          } else {
            cartItems[i].quantity = action.value
          }
          isItemPresent = true;
        }
      }
      if (!isItemPresent) {
        let item = items.find(item => item.id === action.id);
        item.quantity = 1;
        cartItems.push(item);
      }
      newState.totalValue = newState.cartItems.reduce((acc, val) => {
        return acc + (val.price * val.quantity)
      }, 0);
      console.log("Here ==>", newState);
      return newState;

    default:
      return state;
  }
}
