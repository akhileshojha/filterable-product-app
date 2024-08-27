import React from "react";
import { Box } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { setFilterText, setInStockOnly } from "./actions";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

/**
 * Renders a search bar and a product table, allowing the user to filter and
 * view a list of products.
 *
 * @param {Object[]} products - The list of products to display.
 * @return {JSX.Element} A div containing a SearchBar and a ProductTable.
 */
function FilterableProductTable({ products }) {
  const filterText = useSelector((state) => state.filterText);
  const inStockOnly = useSelector((state) => state.inStockOnly);
  const dispatch = useDispatch();

  /**
   * Handles changes to the filter text by dispatching a setFilterText action
   * with the new text.
   *
   * @param {string} text - The new text to filter products by.
   * @return {void}
   */
  const handleFilterTextChange = (text) => {
    dispatch(setFilterText(text));
  };

  /**
   * Handles changes to the "in stock only" checkbox by dispatching a
   * setInStockOnly action with the new value.
   *
   * @param {boolean} inStock - The new value of the "in stock only" checkbox.
   * @return {void}
   */
  const handleInStockOnlyChange = (inStock) => {
    dispatch(setInStockOnly(inStock));
  };

  return (
    <Box p={5} maxW="600px" mx="auto">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockOnlyChange={handleInStockOnlyChange}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </Box>
  );
}

export default FilterableProductTable;
