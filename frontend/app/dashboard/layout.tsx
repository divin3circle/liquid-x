import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";

const titillium = Titillium_Web({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LiquidX",
  description: "Unify your DeFi experience",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={titillium.className}>
        <main className="flex">
          <aside className="hidden md:block w-1/4">Sidebar</aside>
          {children}
        </main>
      </body>
    </html>
  );
}
