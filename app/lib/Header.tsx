"use client";

import CartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from '@mui/icons-material/Home';
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import CartDrawer from "./CartDrawer";
import { useCart } from "./CartProvider";
import { useTheme } from "@mui/material/styles";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleCart = (newOpen: boolean) => setOpen(newOpen);
  const { numItems } = useCart();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="fixed"
            sx={{ background: "#008080", color: "white" }}
          >
            <Toolbar>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="Home"
                  href="/"
                  sx={{ mr: 2 }}
                >
                  <HomeIcon />
                </IconButton>
                <Box
                  sx={{
                    display: "flex",
                    gap: isMobile ? 2 : 4,
                    ml: isMobile ? 0 : 6,
                    fontSize: isMobile ? "0.875rem" : "1rem",
                  }}
                >
                  <Link
                    href="/checkout"
                    style={{ color: "inherit", textDecoration: "none", fontSize: isMobile ? "0.875rem" : "1rem" }}
                  >
                    Checkout
                  </Link>
                  <Link
                    href="/admin"
                    style={{ color: "inherit", textDecoration: "none", fontSize: isMobile ? "0.875rem" : "1rem" }}
                  >
                    Admin
                  </Link>
                </Box>
              </Box>

              <Box sx={{ flexGrow: 1 }} />

              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="cart"
                onClick={() => toggleCart(true)}
                sx={{ mr: 2 }}
              >
                <Badge
                  badgeContent={numItems}
                  color="secondary"
                  showZero
                >
                  <CartIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
        <CartDrawer open={open} toggleCart={toggleCart} />
      </header>
    </>
  );
}
