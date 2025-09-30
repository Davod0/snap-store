import { Product } from "@/data";
import EditIcon from "@mui/icons-material/Edit";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import DeleteButtonWithConfirmation from "./DeleteButtonWithConfirmation";
import EditProductButton from "./EditProductButton";

interface Props {
  product: Product;
}

export default function AdminProductCard({ product }: Props) {
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
      <CardMedia
        component="img"
        alt={product.title}
        height="270"
        image={product.image}
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
          {product.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
          data-cy="product-description"
        >
          {product.description}
        </Typography>{" "}
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
          data-cy="product-id"
        >
          {product.articleNumber}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
          data-cy="product-price"
        >
          {product.price.toFixed(2)} kr
        </Typography>
      </CardContent>
      <Stack direction="row" justifyContent="space-between" margin={2}>
        <EditProductButton product={product}>
          <EditIcon />
        </EditProductButton>
        <DeleteButtonWithConfirmation product={product} />
      </Stack>
    </Card>
  );
}
