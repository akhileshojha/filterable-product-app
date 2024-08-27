import React from 'react';

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
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;