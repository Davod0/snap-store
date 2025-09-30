import { db } from "@/prisma/db";
import DeleteIcon from "@mui/icons-material/AddCircle";
import { Grid2, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import AdminProductCard from "../lib/AdminProductCard";

export default async function AdminPage() {
  const productsFromDb = await db.product.findMany();
  return (
    <main>
      <Stack alignItems="center" marginBottom={3}>
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "2.125rem",
            },
          }}
        >
          Welcome to the admin page
        </Typography>
        <IconButton
          LinkComponent={Link}
          aria-label="add-product"
          href="/admin/product/new/"
          sx={{ color: "#008080", fontSize: "70px" }}
        >
          <DeleteIcon sx={{ color: "#008080", fontSize: "36px" }} />
        </IconButton>
      </Stack>
      <Grid2 container spacing={1} rowSpacing={1}>
        {productsFromDb.map((product) => (
          <Grid2 key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
            <AdminProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
    </main>
  );
}
