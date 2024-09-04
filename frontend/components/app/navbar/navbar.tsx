import React from "react";
import Image from "next/image";
import { CustomButton } from "../buttons/launch-button";
import logo from "../../../public/logo.png";

function Navbar() {
  return (
    <div className="flex justify-between items-center w-full lg:w-[75%] md:w-[90%] mt-8 px-4 dark:bg-black dark:text-white">
      <div className="flex items-center gap-2">
        <Image src={logo} width={40} height={40} alt="Logo" className="" />
        <h1 className="font-bold text-xl">liquidX</h1>
      </div>
      <div className="md:flex justify-between items-center gap-4 lg:gap-8 mt-2 hidden">
        <a href="#">
          <h1 className="text-lg font-semibold">Our DNA</h1>
        </a>
        <a href="#">
          <h1 className="text-lg font-semibold">Community</h1>
        </a>
        <a href="#">
          <h1 className="text-lg font-semibold">Team</h1>
        </a>
        <a href="#">
          <h1 className="text-lg font-semibold">FAQs</h1>
        </a>
      </div>

      <CustomButton title="Launch" />
    </div>
  );
}

export default Navbar;
