import React from "react";
import { Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import { motion } from "framer-motion";

const MotionTable = motion(Table);

/**
 * Renders a table of products.
 *
 * @param {Object[]} products - The list of products to display.
 * @param {string} filterText - The text to filter product names by.
 * @param {boolean} inStockOnly - Whether to only display products in stock.
 * @return {JSX.Element} The table of products.
 */
function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <MotionTable
      variant="simple"
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Price</Th>
        </Tr>
      </Thead>
      <Tbody>{rows}</Tbody>
    </MotionTable>
  );
}

export default ProductTable;
