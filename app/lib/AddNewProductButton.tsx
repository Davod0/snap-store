"use client";

import { Button } from "@mui/material";
import { ReactNode, useState } from "react";
import AddProductDialog from "./AddProductDialog";

interface Props {
  children: ReactNode;
}
export default function AddNewProductButton({ children }: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
      >
        {children}
      </Button>
      <AddProductDialog open={open} handleClose={handleClose} />
    </>
  );
}
