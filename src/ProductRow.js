import React from "react";
import { Tr, Td, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionTr = motion(Tr);
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
    <Text color="red.500">{product.name}</Text>
  );

  return (
    <MotionTr
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Td>{name}</Td>
      <Td>{product.price}</Td>
    </MotionTr>
  );
}

export default ProductRow;
