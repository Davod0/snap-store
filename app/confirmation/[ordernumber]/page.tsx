import { db } from "@/prisma/db";
import { Stack, Typography } from "@mui/material";

interface Props {
  params: { ordernumber: string };
}

export default async function ConfirmationPage(props: Props) {
  const order = await db.order.findUnique({
    where: { orderNumber: props.params.ordernumber },
    include: { customer: true },
  });

  if (!order) {
    return <p>Order not found, you muppet!</p>;
  }

  const totalPrice: number = order.productRows.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <main>
      <Stack justifyContent="center" alignItems="center">
        <Stack spacing={2} maxWidth={500}>
          <Typography fontWeight="bold" fontSize={30}>
            Thank you for your order, {order.customer.firstName}!
          </Typography>
          <Typography>Order #{order.orderNumber}</Typography>
          <Typography>
            A confirmation email has been sent to you with your complete order
            details.
          </Typography>

          <Stack
            spacing={1}
            sx={{ border: "1px solid grey", padding: "0.7rem" }}
          >
            <Typography fontSize={23}>Order details</Typography>
            <Stack>
              <Typography fontWeight="bold">Contact information</Typography>
              <Typography>{order.customer.email}</Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="bold">Shipping address</Typography>
              <Typography>
                {order.customer.firstName} {order.customer.lastName}
              </Typography>
              <Typography>{order.customer.address}</Typography>
              <Typography>
                {order.customer.zipCode} {order.customer.state}
              </Typography>
              <Typography>{order.customer.phoneNr}</Typography>
            </Stack>
          </Stack>

          <Stack
            spacing={1}
            sx={{ border: "1px solid grey", padding: "0.7rem" }}
          >
            {order.productRows.map((product, index) => (
              <Stack key={index}>
                <Typography>{product.title}</Typography>
                <Stack direction="row" justifyContent="space-between">
                  <Typography>Quantity: {product.quantity}</Typography>
                  <Typography>
                    {(product.quantity * product.price).toFixed(2)} kr
                  </Typography>
                </Stack>
              </Stack>
            ))}
            <Typography
              variant="h5"
              sx={{ borderTop: "1px solid black", paddingTop: "0.7rem" }}
            >
              Total: {totalPrice.toFixed(2)} Kr
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </main>
  );
}
