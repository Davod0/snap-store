import ProductForm from "@/app/lib/ProductForm";
import { Stack, Typography } from "@mui/material";

export default function AddProductPage() {
  return (
    <main>
      <Stack alignItems="center">
        <Typography variant="h4">Add a new product</Typography>
        <ProductForm>Add product</ProductForm>
      </Stack>
    </main>
  );
}
