import AddItemToCart from "@/app/lib/AddItemToCart";
import { db } from "@/prisma/db";
import CartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

interface Props {
  params: { articlenumber: string; title: string };
}

export default async function ProductPage(props: Props) {
  const product = await db.product.findUnique({
    where: { articleNumber: props.params.articlenumber },
  });

  if (!product) {
    return (
      <main>
        <Box marginTop="5rem" display="flex" justifyContent="center">
          <Typography variant="h3">404 not found 😂</Typography>
        </Box>
      </main>
    );
  }

  return (
    <main>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardMedia
          sx={{ maxHeight: "500" }}
          component="img"
          alt={product.title}
          image={product.image}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Stack>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              {product.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              {product.description}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Product no.: {product.articleNumber}
            </Typography>
          </Stack>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <AddItemToCart
              product={product}
              size="large"
              sx={{
                color: "white",
                backgroundColor: "#008080",
                flex: "true",
                justifyContent: "space-between",
                flexShrink: 0,
                gap: "1rem",
              }}
            >
              <span>
                {product.price.toFixed(2) + " kr"}
              </span>
              <CartIcon />
            </AddItemToCart>
          </CardActions>
        </CardContent>
      </Card>
    </main>
  );
}
