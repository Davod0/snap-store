"use client";
import { Product } from "@/data";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, TextField } from "@mui/material";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createProduct, updateProduct } from "./actions";

const NewProductSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  image: z.string().endsWith(".png", "Not a valid image."),
  price: z.preprocess((n) => parseFloat(z.string().parse(n)), z.number().gt(0)),
});

export type NewProduct = z.infer<typeof NewProductSchema>;

interface Props {
  product?: Product;
  children: ReactNode;
}

export default function ProductForm({ product, children }: Props) {
  const form = useForm<NewProduct>({
    resolver: zodResolver(NewProductSchema),
  });

  const addNewProduct = async (newProduct: NewProduct) => {
    await createProduct(newProduct);
  };

  const editProduct = async (newProduct: NewProduct) => {
    if (!product) return;
    const prod: Product = {
      id: product.id,
      articleNumber: product.articleNumber,
      ...newProduct,
    };
    await updateProduct(prod);
  };

  return (
    <Stack
      component="form"
      gap={2}
      onSubmit={
        !!product
          ? form.handleSubmit(editProduct)
          : form.handleSubmit(addNewProduct)
      }
    >
      <TextField
        variant="standard"
        label="Title"
        defaultValue={product?.title ?? ""}
        {...form.register("title")}
        error={!!form.formState.errors.title}
        helperText={form.formState.errors.title?.message}
      />
      <TextField
        variant="standard"
        label="Description"
        defaultValue={product?.description ?? ""}
        {...form.register("description")}
        error={!!form.formState.errors.description}
        helperText={form.formState.errors.description?.message}
      />
      <TextField
        variant="standard"
        label="Image filename"
        defaultValue={product?.image.split("/").pop() ?? ""}
        {...form.register("image")}
        error={!!form.formState.errors.image}
        helperText={form.formState.errors.image?.message}
      />
      <TextField
        variant="standard"
        type="number"
        label="Price"
        defaultValue={product?.price ?? ""}
        {...form.register("price")}
        error={!!form.formState.errors.price}
        helperText={form.formState.errors.price?.message}
        sx={{
          "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
            {
              display: "none",
            },
          "& input[type=number]": {
            MozAppearance: "textfield",
          },
        }}
      />
      <Button sx={{ mb: { xs: 8, md: 33 } }} variant="contained" type="submit">
        {children}
      </Button>
    </Stack>
  );
}
