"use client";

import { Product } from "@/data";
import { IconButton, Link } from "@mui/material";
import { ReactNode } from "react";
import { z } from "zod";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  bgcolor: "white",
  //   color: "white",
  border: "2px solid #006565",
  boxShadow: 24,
  p: 4,
};

const NewProductSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  image: z.string().min(1),
  price: z.preprocess((n) => parseFloat(z.string().parse(n)), z.number().gt(0)),
});

export type NewProduct = z.infer<typeof NewProductSchema>;

interface Props {
  product: Product;
  children: ReactNode;
}
export default function EditProductButton({ product, children }: Props) {
  return (
    <IconButton
      LinkComponent={Link}
      href={`../admin/product/${product.articleNumber}/`}
    >
      {children}
    </IconButton>
  );
}
