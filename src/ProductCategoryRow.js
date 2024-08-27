import React from "react";
import { Tr, Th } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionTr = motion(Tr);

/**
 * Renders a table row representing a product category.
 *
 * @param {Object} props - The component props.
 * @param {string} props.category - The name of the product category.
 * @return {JSX.Element} The rendered table row.
 */
function ProductCategoryRow({ category }) {
  return (
    <MotionTr
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Th colSpan="2" textAlign="left" bg ="gray.200">{category}</Th>
    </MotionTr>
  );
}

export default ProductCategoryRow;
