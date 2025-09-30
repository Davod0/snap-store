export interface Product {
  id: string;
  articleNumber: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export const products: Product[] = [
  {
    id: "1",
    articleNumber: "P0001",
    image: "/images/Wireless-Headphones.png",
    title: "Wireless Bluetooth Headphones",
    description:
      "High-quality wireless headphones with noise cancellation and long battery life.",
    price: 799.9,
  },
  {
    id: "2",
    articleNumber: "P0002",
    image: "/images/smart-watch.png",
    title: "Smartwatch with Fitness Tracker",
    description:
      "A smartwatch with heart rate monitoring, GPS, and multiple fitness tracking modes.",
    price: 1499.9,
  },
  {
    id: "3",
    articleNumber: "P0003",
    image: "/images/charger.png",
    title: "Portable Charger 10000mAh",
    description:
      "Compact and lightweight power bank with fast charging capabilities.",
    price: 299.9,
  },
  {
    id: "4",
    articleNumber: "P0004",
    image: "/images/4k-action-camera.png",
    title: "4K Ultra HD Action Camera",
    description:
      "Waterproof action camera with 4K recording and wide-angle lens.",
    price: 999.9,
  },
  {
    id: "5",
    articleNumber: "P0005",
    image: "/images/Wireless-Ergonomic-Mouse.png",
    title: "Wireless Ergonomic Mouse",
    description:
      "Ergonomic mouse designed for comfort with adjustable DPI settings.",
    price: 399.9,
  },
  {
    id: "6",
    articleNumber: "P0006",
    image: "/images/Noise-Cancelling-Earbuds.png",
    title: "Noise Cancelling Earbuds",
    description:
      "In-ear earbuds with active noise cancellation and long battery life.",
    price: 599.9,
  },
  {
    id: "7",
    articleNumber: "P0007",
    image: "/images/Smart-Home-Security-Camera.png",
    title: "Smart Home Security Camera",
    description:
      "Wi-Fi-enabled security camera with motion detection and night vision.",
    price: 899.9,
  },
  {
    id: "8",
    articleNumber: "P0008",
    image: "/images/Gaming-Keyboard-with-RGB-Backlight.png",
    title: "Gaming Keyboard with RGB Backlight",
    description:
      "Mechanical keyboard with customizable RGB lighting and programmable keys.",
    price: 699.9,
  },
  {
    id: "9",
    articleNumber: "P0009",
    image: "/images/Portable-Bluetooth-Speaker.png",
    title: "Portable Bluetooth Speaker",
    description:
      "Water-resistant Bluetooth speaker with powerful bass and long battery life.",
    price: 499.9,
  },
  {
    id: "10",
    articleNumber: "P0010",
    image: "/images/USB-C-Hub-with-7-Ports.png",
    title: "USB-C Hub with 7 Ports",
    description:
      "Compact USB-C hub with 7 ports including HDMI, USB 3.0, and SD card reader.",
    price: 449.9,
  },
  {
    id: "11",
    articleNumber: "P0011",
    image: "/images/Smart-LED-Light-Bulb.png",
    title: "Smart LED Light Bulb",
    description:
      "Wi-Fi-enabled LED light bulb with color-changing capabilities and voice control.",
    price: 199.9,
  },
  {
    id: "12",
    articleNumber: "P0012",
    image: "/images/Portable-Espresso-Maker.png",
    title: "Portable Espresso Maker",
    description:
      "Compact manual espresso maker perfect for coffee lovers on the go.",
    price: 599.9,
  },
];
