"use client";

import { CartItem } from "@/data";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
import { useCart } from "./CartProvider";

interface Props {
  cartItem: CartItem;
  color?: string;
}

export default function DecreaseCartItemButton({
  cartItem,
  color = "white",
}: Props) {
  const { decreaseCartItem } = useCart();
  return (
    <IconButton
      aria-label="remove"
      sx={{ color }}
      onClick={() => decreaseCartItem(cartItem)}
      data-cy="decrease-quantity-button"
    >
      <RemoveIcon fontSize="small" />
    </IconButton>
  );
}
