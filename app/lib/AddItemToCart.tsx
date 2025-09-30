"use client";

import { Product } from "@/data";
import {
  Alert,
  Button,
  ButtonProps,
  Snackbar,
  SnackbarCloseReason,
} from "@mui/material";
import { ReactNode, SyntheticEvent, useState } from "react";
import { useCart } from "./CartProvider";

type Props = ButtonProps & {
  product: Product;
  children: ReactNode;
};

export default function AddItemToCart({ product, children, ...rest }: Props) {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { addToCart } = useCart();

  const handleCloseSnackbar = (
    e: SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  return (
    <>
      <Button
        {...rest}
        onClick={() => {
          addToCart(product);
          setOpenSnackbar(true);
        }}
      >
        {children}
      </Button>
      <Snackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        autoHideDuration={3000}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: "100%", backgroundColor: "#008080" }}
        >
          <span>
            {product.title + " has been added to your cart."}
          </span>
        </Alert>
      </Snackbar>
    </>
  );
}
