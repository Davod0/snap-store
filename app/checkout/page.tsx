"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid2 as Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createOrder } from "../lib/actions";
import { useCart } from "../lib/CartProvider";
import ProductCartView from "../lib/ProductCartView";

const CustomerSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string(),
  email: z.string().email(),
  address: z.string().min(1),
  zipCode: z.string().min(5).max(5),
  state: z.string().min(1),
  phoneNr: z.string().min(10).max(10),
});

export type Customer = z.infer<typeof CustomerSchema>;

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();

  const form = useForm<Customer>({
    resolver: zodResolver(CustomerSchema),
  });

  const registerCheckout = async (customer: Customer) => {
    const response = await createOrder({ customer, cart });
    console.log({ customer, response });
    clearCart();
  };

  return (
    <main>
      <Grid container spacing={2}>
        {/* above or left side: Cart summary */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h2" fontSize={23} fontWeight="bold">
                Cart
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack>
                {cart.map((p) => (
                  <ProductCartView key={p.id} product={p} buttonColor="black" />
                ))}
                <Stack
                  sx={{ bgcolor: "#e8dcc4", margin: 2, padding: 1 }}
                >
                  Total: {totalPrice.toFixed(2)} kr
                </Stack>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Grid>
        {/* below or right side: customer form */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack
            component="form"
            gap={3}
            onSubmit={form.handleSubmit(registerCheckout)}
          >
            <Typography variant="h2" fontSize={23} fontWeight="bold">
              Delivery Address
            </Typography>
            <TextField
              label="Name"
              autoComplete="name"
              {...form.register("firstName")}
              error={Boolean(form.formState.errors.firstName)}
              helperText={form.formState.errors.firstName?.message}
            />
            <TextField
              label="LastName"
              autoComplete="family-name"
              {...form.register("lastName")}
              error={Boolean(form.formState.errors.lastName)}
              helperText={form.formState.errors.lastName?.message}
            />
            <TextField
              label="Email"
              autoComplete="email"
              {...form.register("email")}
              error={Boolean(form.formState.errors.email)}
              helperText={form.formState.errors.email?.message}
            />
            <TextField
              type="number"
              label="Phone"
              autoComplete="tel"
              {...form.register("phoneNr")}
              error={Boolean(form.formState.errors.phoneNr)}
              helperText={form.formState.errors.phoneNr?.message}
            />
            <TextField
              label="Address"
              autoComplete="street-address"
              {...form.register("address")}
              error={Boolean(form.formState.errors.address)}
              helperText={form.formState.errors.address?.message}
            />
            <TextField
              type="number"
              label="ZipCode"
              autoComplete="postal-code"
              {...form.register("zipCode")}
              error={Boolean(form.formState.errors.zipCode)}
              helperText={form.formState.errors.zipCode?.message}
            />
            <TextField
              label="State"
              autoComplete="address-level2"
              {...form.register("state")}
              error={Boolean(form.formState.errors.state)}
              helperText={form.formState.errors.state?.message}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ bgcolor: "#008080" }}
            >
              COMPLETE ORDER
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </main>
  );
}
