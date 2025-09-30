"use server";
import { CartItem, Product } from "@/data";
import { db } from "@/prisma/db";
import { ProductRow } from "@prisma/client";
import { redirect } from "next/navigation";
import { Customer } from "../checkout/page";
import { NewProduct } from "./EditProductButton";

export interface CartOrder {
  customer: Customer;
  cart: CartItem[];
}

export async function createOrder(cartOrder: CartOrder) {
  const orderNumber = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  const productRows: ProductRow[] = cartOrder.cart.map((product) => ({
    title: product.title,
    quantity: product.quantity,
    price: product.price,
  }));

  await db.order.create({
    data: {
      orderNumber: orderNumber,
      customer: { create: cartOrder.customer },
      productRows: productRows,
    },
  });

  redirect(`/confirmation/${orderNumber}`);
}

export async function deleteProduct(product: Product) {
  await db.product.delete({
    where: { id: product.id },
  });

  redirect("/admin/");
}

export async function createProduct({ image, ...rest }: NewProduct) {
  const biggestArtNoInDb = await db.product.findFirst({
    select: { articleNumber: true },
    orderBy: { articleNumber: "desc" },
  });
  let x = Number.parseInt(biggestArtNoInDb?.articleNumber.slice(1) ?? "0") + 1;
  const articleNumber = "P" + x.toString().padStart(4, "0");

  await db.product.create({
    data: {
      image: "/images/" + image,
      articleNumber,
      ...rest,
    },
  });
  redirect("/admin/");
}

export async function updateProduct({
  id,
  articleNumber,
  image,
  ...productProps
}: Product) {
  await db.product.update({
    where: { id },
    data: {
      image: "/images/" + image,
      ...productProps,
    },
  });
  redirect("/admin/");
}
