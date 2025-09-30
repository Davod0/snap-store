"use client";

import { Product } from "@/data";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useState } from "react";
import DeleteDialog from "./DeleteDialog";

interface Props {
  product: Product;
}

export default function DeleteButtonWithConfirmation({ product }: Props) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton
        aria-label="delete"
        onClick={handleClickOpen}
      >
        <DeleteIcon />
      </IconButton>

      <DeleteDialog product={product} open={open} handleClose={handleClose} />
    </>
  );
}
