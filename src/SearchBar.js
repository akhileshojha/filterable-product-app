import React from 'react';
import { Box, Input, Checkbox, FormControl, FormLabel } from '@chakra-ui/react';

/**
 * A search bar for filtering products.
 *
 * @param {string} filterText - The current filter text.
 * @param {boolean} inStockOnly - Whether to only show products in stock.
 * @param {function} onFilterTextChange - A function to call when the filter text changes.
 * @param {function} onInStockOnlyChange - A function to call when the "in stock only" checkbox changes.
 * @return {JSX.Element} A form containing an input field for filter text and a checkbox for "in stock only".
 */
function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <Box mb={4}>
      <FormControl>
        <Input
          placeholder="Search..."
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
          mb={2}
        />
        <Checkbox
          isChecked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        >
          Only show products in stock
        </Checkbox>
      </FormControl>
    </Box>
  );
}

export default SearchBar;