import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { FaCreditCard, FaHeart } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IoMenu } from "react-icons/io5";
import DrawerSideBar from "../sidebar/drawer-sidebar";

function DashboardNavbar() {
  return (
    <div className="flex items-center justify-between w-full my-4">
      <div className="flex gap-2">
        <Input
          placeholder="Search pools"
          className="ml-2 lg:w-[300px] md:w-[200px]"
        />
        <Button className="mx-4 -ml-1 flex bg-primary-500 hover:bg-transparent hover:text-primary">
          <IoMdSearch size={22} />
        </Button>
      </div>
      <div className="md:flex items-center justify-between hidden lg:w-[30%] md:w-1/2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex gap-2 items-center">
                <FaHeart size={22} className="text-primary-500" />
                <p className="text-xs">1.54</p>
              </div>
            </TooltipTrigger>
            <TooltipContent sideOffset={10}>Health score</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex gap-2 items-center">
                <FaCreditCard size={22} className="text-primary-500" />
                <p className="text-xs">770/1000</p>
              </div>
            </TooltipTrigger>
            <TooltipContent sideOffset={10}>Credit score</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="mr-1">
          <Button className="flex bg-primary-500">Connect Wallet</Button>
        </div>
      </div>
      <div className="flex md:hidden mx-1">
        <Drawer>
          <DrawerTrigger>
            <IoMenu className="mx-2" size={42} />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerSideBar />
            </DrawerHeader>
            <DrawerFooter>
              <div className="mr-1 flex justify-between">
                <Button className="flex bg-primary-500">Connect Wallet</Button>
                <div className="flex gap-2">
                  <div className="flex gap-2 items-center">
                    <FaHeart size={22} className="text-primary-500" />
                    <p className="text-xs">1.54</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaCreditCard size={22} className="text-primary-500" />
                    <p className="text-xs">770/1000</p>
                  </div>
                </div>
              </div>
              <DrawerClose>
                <Button variant="outline" className="w-full mt-2">
                  Close
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default DashboardNavbar;
