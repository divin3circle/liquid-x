import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import logo from "../../public/logo.png";
import Image from "next/image";
import { MdSpaceDashboard } from "react-icons/md";
import { SiDepositphotos } from "react-icons/si";
import { IoIosSwap } from "react-icons/io";
import { FaGear, FaSackDollar } from "react-icons/fa6";
import Link from "next/link";
import { RiMessage3Fill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";

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
          <aside className="hidden md:flex flex-col justify-between w-[15%] mt-2 bg-[##FAF9F6] shadow-md h-screen pl-2">
            <div className="flex gap-2 items-center mx-4 my-4">
              <Image
                src={logo}
                alt="LiquidX"
                className=""
                width={50}
                height={50}
              />
              <h1 className="font-bold ">liquidX</h1>
            </div>
            <div>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/dashboard"
                  className="p-4 flex gap-2 items-center my-2"
                >
                  <MdSpaceDashboard />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/swap"
                  className="p-4 flex gap-2 items-center my-2"
                >
                  <SiDepositphotos />
                  Deposit & Borrow
                </Link>
                <Link
                  href="/dashboard/pool"
                  className="p-4 flex gap-2 items-center my-2"
                >
                  <IoIosSwap />
                  Swap
                </Link>
                <Link
                  href="/dashboard/farm"
                  className="p-4 flex gap-2 items-center my-2"
                >
                  <FaSackDollar />
                  Quick Borrow
                </Link>
              </nav>
            </div>
            <div>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/dashboard"
                  className="p-4 flex gap-2 items-center my-2"
                >
                  <RiMessage3Fill />
                  Support
                </Link>
                <Link
                  href="/dashboard/swap"
                  className="p-4 flex gap-2 items-center my-2"
                >
                  <FaGear />
                  Settings
                </Link>
              </nav>
            </div>
            <div>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/dashboard"
                  className="p-4 flex gap-2 items-center my-2"
                >
                  <IoLogOut />
                  Logout
                </Link>
              </nav>
            </div>
          </aside>
          {children}
        </main>
      </body>
    </html>
  );
}
