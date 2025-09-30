import { Product } from "@/data";
import CartIcon from "@mui/icons-material/ShoppingCart";
import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import AddItemToCart from "./AddItemToCart";

interface Props {
  product: Product;
}

export default function ProductCard(props: Props) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
      data-cy="product"
    >
      <Link
        href={`../product/${props.product.articleNumber}/${encodeURIComponent(
          props.product.title
        )}`}
        sx={{ textDecoration: "none" }}
      >
        <CardMedia
          component="img"
          alt={props.product.title}
          height="270"
          image={props.product.image}
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: "text.secondary" }}
            data-cy="product-title"
          >
            {props.product.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            data-cy="product-description"
          >
            {props.product.description}
          </Typography>
        </CardContent>
      </Link>
      <AddItemToCart
        product={props.product}
        size="large"
        sx={{
          color: "white",
          width: "100%",
          flex: "true",
          backgroundColor: "#008080",
          justifyContent: "space-between",
        }}
      >
        <span data-cy="product-price">
          {props.product.price.toFixed(2) + " kr"}
        </span>
        <CartIcon />
      </AddItemToCart>
    </Card>
  );
}
