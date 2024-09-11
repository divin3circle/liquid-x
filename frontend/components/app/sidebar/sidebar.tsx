"use client";

import React, { useState } from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { MdSpaceDashboard } from "react-icons/md";
import { SiDepositphotos } from "react-icons/si";
import { IoIosSwap } from "react-icons/io";
import { FaGear, FaSackDollar } from "react-icons/fa6";
import Link from "next/link";
import { RiMessage3Fill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import { useRouter } from "next/navigation";
function Sidebar() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleNavigation = (path: string) => {
    setLoading(true);
    router.replace(path);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-ring loading-md"></span>
      </div>
    );
  }
  return (
    <aside className="hidden lg:flex flex-col gap-48 md:w-[25%] lg:w-[20%] w-full mt-0 bg-[#fcfcfc] shadow-md h-screen pl-2">
      <div className="flex gap-2 items-center mx-4 my-4">
        <Image src={logo} alt="LiquidX" className="" width={50} height={50} />
        <h1 className="font-bold ">liquidX</h1>
      </div>
      <div className="">
        <nav className="flex flex-col gap-2">
          <Link
            href="/dashboard"
            className="p-4 flex gap-2 items-center my-2"
            onClick={() => handleNavigation("/dashboard")}
          >
            <MdSpaceDashboard />
            Dashboard
          </Link>
          <Link
            href="/deposit"
            className="p-4 flex gap-2 items-center my-2"
            onClick={() => handleNavigation("/deposit")}
          >
            <SiDepositphotos />
            Deposit
          </Link>
          <Link
            href="/swap"
            className="p-4 flex gap-2 items-center my-2"
            onClick={() => handleNavigation("/swap")}
          >
            <IoIosSwap />
            Swap
          </Link>
          <Link
            href="/quick"
            className="p-4 flex gap-2 items-center my-2"
            onClick={() => handleNavigation("/quick")}
          >
            <FaSackDollar />
            Quick Borrow
          </Link>
        </nav>
      </div>
      {/* <div>
        <nav className="flex flex-col gap-2">
          <Link href="/dashboard" className="p-4 flex gap-2 items-center my-2">
            <RiMessage3Fill />
            Support
          </Link>
          <Link href="/settings" className="p-4 flex gap-2 items-center my-2">
            <FaGear />
            Settings
          </Link>
        </nav>
      </div> */}
      {/* <div>
        <nav className="flex flex-col gap-2">
          <Link href="/dashboard" className="p-4 flex gap-2 items-center my-2">
            <IoLogOut />
            Logout
          </Link>
        </nav>
      </div> */}
    </aside>
  );
}

export default Sidebar;
