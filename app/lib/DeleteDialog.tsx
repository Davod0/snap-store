import { Product } from "@/data";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { deleteProduct } from "./actions";

interface Props {
  product: Product;
  open: boolean;
  handleClose: () => void;
}

export default function DeleteDialog({ product, open, handleClose }: Props) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">
        {"Delete " + product.title + "?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this product?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Go Back</Button>
        <Button
          onClick={() => {
            handleClose;
            deleteProduct(product);
          }}
          autoFocus
          variant="contained"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
