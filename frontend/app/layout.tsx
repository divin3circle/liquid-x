import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";

const titillium = Titillium_Web({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LiquidX",
  description: "Unify your DeFi experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          type="image/png"
          sizes="16x16"
          rel="icon"
          href=".../icons8-rain drop-external-goofy-solid-kerismaker-16.png"
        />
      </head>
      <body className={titillium.className}>{children}</body>
    </html>
  );
}
