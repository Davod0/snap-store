import {
  Box,
  Divider,
  Drawer,
  Stack,
  Typography
} from "@mui/material";
import Link from "next/link";
import { useCart } from "./CartProvider";
import ClearCartButton from "./ClearCart";
import ProductCartView from "./ProductCartView";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

interface Props {
  open: boolean;
  toggleCart: (newOpen: boolean) => void;
}

export default function CartDrawer(props: Props) {
  const { cart, totalPrice } = useCart();

  const CartList = (
    <Stack
      sx={{
        width: 300,
        height: "100%",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#008080",
        color: "white",
      }}
      role="presentation"
    >
      <Stack>
        <h2>Cart</h2>
        {cart.map((p) => (
          <ProductCartView key={p.id} product={p} />
        ))}
      </Stack>
      <Stack>
        <Divider />
        <Typography variant="h5">
          <Box component="span" sx={{ ml: -0.5, display: "inline-block", mb: 2 }}>
            Total: {totalPrice.toFixed(2)}
          </Box>
          <br />
          <Link
            href={"/checkout"}
            style={{ color: "inherit", textDecoration: "none", marginLeft: -3 }}
            onClick={() => props.toggleCart(false)}
          >
            Checkout
            <ShoppingCartCheckoutIcon sx={{ ml: 2, verticalAlign: 'middle', fontSize: "34px" }} />
          </Link>
        </Typography>
           {cart.length > 0 ? <ClearCartButton /> : null}
      </Stack>
    </Stack>
  );
  return (
    <>
      <Drawer
        open={props.open}
        anchor="right"
        onClose={() => props.toggleCart(false)}
      >
        {CartList}
      </Drawer>
    </>
  );
}
