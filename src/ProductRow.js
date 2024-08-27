import React from "react";

/**
 * Renders a table row representing a product.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.product - The product to display.
 * @param {string} props.product.name - The name of the product.
 * @param {string} props.product.price - The price of the product.
 * @param {boolean} props.product.stocked - Whether the product is in stock.
 * @return {JSX.Element} The rendered table row.
 */
function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
