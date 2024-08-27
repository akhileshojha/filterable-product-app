export const SET_FILTER_TEXT = "SET_FILTER_TEXT";
export const SET_IN_STOCK_ONLY = "SET_IN_STOCK_ONLY";


/**
 * Creates an action object to set the filter text.
 *
 * @param {string} text - The new filter text.
 * @return {Object} An action object with a type of SET_FILTER_TEXT and a payload
 *                  containing the new filter text.
 */
export const setFilterText = (text) => ({
  type: SET_FILTER_TEXT,
  payload: text,
});


/**
 * Creates an action object to set whether to only show products in stock.
 *
 * @param {boolean} inStockOnly - Whether to only show products in stock.
 * @return {Object} An action object with a type of SET_IN_STOCK_ONLY and a payload
 *                  containing whether to only show products in stock.
 */
export const setInStockOnly = (inStockOnly) => ({
  type: SET_IN_STOCK_ONLY,
  payload: inStockOnly,
});
