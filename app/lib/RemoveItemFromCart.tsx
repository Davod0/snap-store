"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { Product } from "@prisma/client";
import { useCart } from "./CartProvider";

type Props = {
  product: Product;
};

export default function RemoveItemFromCart({ product }: Props) {
  const { removeProduct } = useCart();

  return (
    <IconButton
      aria-label="delete"
      onClick={() => {
        removeProduct(product);
      }}
    >
      <DeleteIcon />
    </IconButton>
  );
}
