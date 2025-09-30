"use client";

import { CartItem } from "@/data";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import { useCart } from "./CartProvider";

interface Props {
  cartItem: CartItem;
  color?: string;
}

export default function IncreaseCartItemButton({
  cartItem,
  color = "white",
}: Props) {
  const { increaseCartItem } = useCart();

  return (
    <IconButton
      aria-label="add"
      sx={{ color }}
      onClick={() => increaseCartItem(cartItem)}
      data-cy="increase-quantity-button"
    >
      <AddIcon fontSize="small" />
    </IconButton>
  );
}
