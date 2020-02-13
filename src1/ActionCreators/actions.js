import { CHANGE_ITEM_QUANTITY } from "./actionNames";

export const changeItemQuantity = (id, value, isInput) => {
  return {
    type: CHANGE_ITEM_QUANTITY,
    id,
    value,
    isInput
  }
}
