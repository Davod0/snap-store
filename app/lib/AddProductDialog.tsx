import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createProduct } from "./actions";

interface Props {
  open: boolean;
  handleClose: () => void;
}
const NewProductSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  image: z.string().min(1),
  price: z.preprocess((n) => parseFloat(z.string().parse(n)), z.number().gt(0)),
});

export type NewProduct = z.infer<typeof NewProductSchema>;

export default function AddProductDialog({ open, handleClose }: Props) {
  const form = useForm<NewProduct>({
    resolver: zodResolver(NewProductSchema),
  });

  const addNewProduct = async (newProduct: NewProduct) => {
    await createProduct(newProduct);
    handleClose();
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">Add a new product</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this product?
        </DialogContentText>
        <Stack
          gap={2}
          component="form"
          onSubmit={form.handleSubmit(addNewProduct)}
        >
          <TextField
            variant="standard"
            label="Title"
            {...form.register("title")}
            error={!!form.formState.errors.title}
            helperText={form.formState.errors.title?.message}
          />
          <TextField
            variant="standard"
            label="Description"
            {...form.register("description")}
            error={!!form.formState.errors.description}
            helperText={form.formState.errors.description?.message}
          />
          <TextField
            variant="standard"
            label="Image filename"
            {...form.register("image")}
            error={!!form.formState.errors.image}
            helperText={form.formState.errors.image?.message}
          />
          <TextField
            variant="standard"
            type="number"
            label="Price"
            {...form.register("price")}
            error={!!form.formState.errors.price}
            helperText={form.formState.errors.price?.message}
          />
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" type="submit">
              Add Product
            </Button>
          </DialogActions>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
