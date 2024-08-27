import React from "react";

/**
 * Renders a table row representing a product category.
 *
 * @param {Object} props - The component props.
 * @param {string} props.category - The name of the product category.
 * @return {JSX.Element} The rendered table row.
 */
function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

export default ProductCategoryRow;
