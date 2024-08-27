import { SET_FILTER_TEXT, SET_IN_STOCK_ONLY } from "./actions";

const initialState = {
  filterText: "",
  inStockOnly: false,
};

/**
 * Reducer function for managing the state of the product filter.
 *
 * @param {Object} state - The current state of the product filter.
 * @param {Object} action - The action object containing the type and payload.
 * @return {Object} The new state of the product filter.
 */
export const productFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_TEXT:
      return {
        ...state,
        filterText: action.payload,
      };
    case SET_IN_STOCK_ONLY:
      return {
        ...state,
        inStockOnly: action.payload,
      };
    default:
      return state;
  }
};
