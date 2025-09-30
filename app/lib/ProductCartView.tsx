import { CartItem } from "@/data";
import { Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import DecreaseCartItemButton from "./DecreaseCartItemButton";
import IncreaseCartItemButton from "./IncreaseCartItemButton";
import RemoveItemFromCart from "./RemoveItemFromCart";

type Props = {
  product: CartItem;
  buttonColor?: string;
};

export default function ProductCartView({
  product,
  buttonColor = "white",
}: Props) {
  const combinedProductCost = product.price * product.quantity;

  return (
    <Stack
      direction="row"
      sx={{ borderBottom: "1px solid black" }}
      margin={0.5}
    >
      {/* produkt bild */}
      <Link
        href={`/product/${product.articleNumber}/${encodeURIComponent(
          product.title
        )}`}
        sx={{ textDecoration: "none" }}
      >
        <Image
          src={product.image}
          alt={product.title}
          width={50}
          height={50}
          style={{ objectFit: "contain" }}
        />
      </Link>

      {/* produkt info */}
      <Stack sx={{ flexGrow: 1 }} justifyContent="space-between">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body2" sx={{ paddingLeft: "0.3rem" }}>
            {product.title}
          </Typography>
          <RemoveItemFromCart product={product} />
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* - + och antal */}
          <Stack direction="row" alignItems="center">
            <DecreaseCartItemButton cartItem={product} color={buttonColor} />
            <Typography>{product.quantity}</Typography>
            <IncreaseCartItemButton cartItem={product} color={buttonColor} />
          </Stack>
          <Typography
            variant="caption"
            // sx={{ marginLeft: "auto" }}
          >
            {combinedProductCost.toFixed(2)}kr
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
