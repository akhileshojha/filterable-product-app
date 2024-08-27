import React from "react";
import { Tr, Th } from "@chakra-ui/react";

/**
 * Renders a table row representing a product category.
 *
 * @param {Object} props - The component props.
 * @param {string} props.category - The name of the product category.
 * @return {JSX.Element} The rendered table row.
 */
function ProductCategoryRow({ category }) {
  return (
    <Tr>
      <Th colSpan="2" textAlign="left" bg ="gray.200">{category}</Th>
    </Tr>
  );
}

export default ProductCategoryRow;
