import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Container, CssBaseline } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CartProvider from "./lib/CartProvider";
import Header from "./lib/Header";
import { LayoutProps } from "./types";

const inter = Inter({ subsets: ["latin"] });

/* Beskriv din hemsida för sökmotorerna */
export const metadata: Metadata = {
  title: "Snap Store",
  description: "Dina favoritprodukter online till en bra pris...",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssBaseline />
        <CartProvider>
          <Header />
          <Container>
            <Box
              maxWidth={1200}
              sx={{
                marginTop: "4rem",
                padding: 2,
              }}
            >
              {children}
              <footer>
                <center>
                  <p>© Coding Squad 2024</p>
                </center>
              </footer>
            </Box>
          </Container>
        </CartProvider>
      </body>
    </html>
  );
}
