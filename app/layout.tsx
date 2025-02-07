// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { CartProvider } from "@/app/context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Comforty",
  description: "E-commerce site for comfortable furniture",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <WishlistProvider>
        <html lang="en">
          <body className={`${inter.className} antialiased`}>
            <main>{children}</main>
          </body>
        </html>
      </WishlistProvider>
    </CartProvider>
  );
}
