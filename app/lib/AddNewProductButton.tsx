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
        data-cy="admin-add-product"
        onClick={handleOpen}
      >
        {children}
      </Button>
      <AddProductDialog open={open} handleClose={handleClose} />
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Add a new product
          </Typography>
          <Stack
            component="form"
            gap={2}
            onSubmit={form.handleSubmit(addNewProduct)}
            data-cy="product-form"
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
            <Button variant="contained" type="submit">
              Add Product
            </Button>
          </Stack>
        </Box>
      </Modal> */}
    </>
  );
}
