import { db } from "@/prisma/db";
import { Grid2 } from "@mui/material";
import ProductCard from "./lib/ProductCard";

export default async function Home() {
  const productsFromDb = await db.product.findMany();
  return (
    <main>
      <Grid2 container spacing={1} rowSpacing={1}>
        {productsFromDb.map((product) => (
          <Grid2 key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
    </main>
  );
}
