"use client";

import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { IconButton, Typography } from "@mui/material";
import { useCart } from "./CartProvider";
import DeleteIcon from '@mui/icons-material/Delete';

export default function ClearCartButton() {
  const { clearCart } = useCart();
  return (
     <IconButton aria-label="delete" disableRipple disableFocusRipple onClick={clearCart}
        sx={{color: 'white', justifyContent: 'flex-start', marginLeft: '-9px', '&:hover': {backgroundColor: 'transparent'},}}>
        <Typography  variant="h6">Empty Cart</Typography>
        <DeleteIcon sx={{ ml: 2, verticalAlign: 'middle', fontSize: "34px" }} />
    </IconButton>
  );
}




