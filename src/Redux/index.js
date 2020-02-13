import { createStore } from "redux";

// 1. Create the common data state
let initialState = {
  items: [],
  cartItems: [],
  totalValue: ""
}

// 2. A way to return this state
function stateReducer(state = initialState, action) {
  console.log("Action here", action);
  let stateCopy = {...state};
  switch (action.type) {
    case "add_items_first_time":
      stateCopy.items = [...stateCopy.items, ...action.payload];
      return stateCopy;

    default:
      return stateCopy;
  }
}

// 3. Create the store
let store = createStore(stateReducer);
export default store;
