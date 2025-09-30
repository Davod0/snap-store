import ProductForm from "@/app/lib/ProductForm";
import { db } from "@/prisma/db";
import { Box, Stack, Typography } from "@mui/material";

interface Props {
  params: { articlenumber: string };
}

export default async function AdminProductPage(props: Props) {
  const product = await db.product.findUnique({
    where: { articleNumber: props.params.articlenumber },
  });

  if (!product) {
    return (
      <main>
        <Box marginTop="5rem" display="flex" justifyContent="center">
          <Typography variant="h3">404 not found</Typography>
        </Box>
      </main>
    );
  }

  return (
    <main>
      <Stack alignItems="center">
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
          }}
        >
          Edit product: {product.articleNumber}
        </Typography>
        <ProductForm product={product}>Edit product</ProductForm>
      </Stack>
    </main>
  );
}
