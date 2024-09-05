import React from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { MdSpaceDashboard } from "react-icons/md";
import { SiDepositphotos } from "react-icons/si";
import { IoIosSwap } from "react-icons/io";
import { FaGear, FaSackDollar } from "react-icons/fa6";
import Link from "next/link";
import { RiMessage3Fill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";

function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col justify-between w-[35%] lg:w-[20%] mt-2 bg-[##FAF9F6] shadow-md h-screen pl-2">
      <div className="flex gap-2 items-center mx-4 my-4">
        <Image src={logo} alt="LiquidX" className="" width={50} height={50} />
        <h1 className="font-bold ">liquidX</h1>
      </div>
      <div>
        <nav className="flex flex-col gap-2">
          <Link href="/dashboard" className="p-4 flex gap-2 items-center my-2">
            <MdSpaceDashboard />
            Dashboard
          </Link>
          <Link href="/deposit" className="p-4 flex gap-2 items-center my-2">
            <SiDepositphotos />
            Deposit & Borrow
          </Link>
          <Link href="/swap" className="p-4 flex gap-2 items-center my-2">
            <IoIosSwap />
            Swap
          </Link>
          <Link href="/quick" className="p-4 flex gap-2 items-center my-2">
            <FaSackDollar />
            Quick Borrow
          </Link>
        </nav>
      </div>
      <div>
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
      </div>
      <div>
        <nav className="flex flex-col gap-2">
          <Link href="/dashboard" className="p-4 flex gap-2 items-center my-2">
            <IoLogOut />
            Logout
          </Link>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;