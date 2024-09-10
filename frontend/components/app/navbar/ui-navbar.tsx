"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { FaCreditCard, FaHeart } from "react-icons/fa6";
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
import Image from "next/image";
import logo from "../../../public/logo.png";
import { Web3 } from "web3";
import { toast } from "react-hot-toast";
//@ts-ignore
import { MetamaskPlugin } from "web3-metamask-plugin";
import { MetaMaskInpageProvider } from "@metamask/providers";

function DashboardNavbar() {
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<any>("");
  const [web3, setWeb3] = useState<any>("");
  const connectWallet = async () => {
    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum !== "undefined") {
        // Create a new Web3 instance
        const web3Instance = new Web3(window.ethereum);

        // Register the MetaMask plugin
        web3.registerPlugin(new MetamaskPlugin());

        // Request account access
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Get the connected accounts
        const accounts = await web3.eth.getAccounts();

        if (accounts.length > 0) {
          // Set the first account as the connected account
          setAccount(accounts[0]);
          // Get the current chain ID
          const chainId = await web3Instance.eth.getChainId();
          setChainId(chainId.toString());
          toast.success("Wallet connected successfully!");
        } else {
          toast.error(
            "No accounts found. Please check your MetaMask configuration."
          );
        }
      } else {
        toast.error(
          "MetaMask is not installed. Please install it to connect your wallet."
        );
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      toast.error("Failed to connect wallet. Please try again.");
    }
  };

  useEffect(() => {
    // Check if the wallet is already connected
    const checkConnection = async () => {
      if (typeof window.ethereum !== "undefined") {
        const ethereum = window.ethereum as MetaMaskInpageProvider;
        const web3Instance = new Web3(ethereum as any);
        setWeb3(web3Instance);

        try {
          const accounts = await web3Instance.eth.getAccounts();
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            const chainId = await web3Instance.eth.getChainId();
            setChainId(chainId.toString());
          }
        } catch (error) {
          console.error("Error checking connection:", error);
        }
      }
    };

    checkConnection();

    // Listen for account changes
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", (accounts: any) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          setAccount(null);
          setChainId(null);
        }
      });

      // Listen for chain changes
      window.ethereum.on("chainChanged", (chainId: any) => {
        setChainId(chainId);
      });
    }

    // Cleanup listeners on component unmount
    return () => {
      if (typeof window.ethereum !== "undefined") {
        window.ethereum.removeAllListeners();
      }
    };
  }, []);

  const getNetworkName = (chainId: string) => {
    switch (chainId) {
      // Mainnets
      case "1":
        return "Ethereum Mainnet";
      case "10":
        return "Optimism";
      case "137":
        return "Polygon";
      case "8453":
        return "Base";
      case "43114":
        return "Avalanche";
      case "42161":
        return "Arbitrum One";

      // Testnets
      case "11155111":
        return "Sepolia";
      case "43113":
        return "Avalanche Fuji";
      case "11155420":
        return "Optimism Sepolia";
      case "84531":
        return "Base Goerli";
      case "421613":
        return "Arbitrum Goerli";
      case "80001":
        return "Polygon Mumbai";
      case "5":
        return "Goerli";
      case "80002":
        return "Polygon Amoy";

      default:
        return "Unknown Network";
    }
  };
  return (
    <div className="flex items-center justify-between md:w-full my-4">
      <div className="flex gap-2 mx-2">
        <div className="lg:hidden flex items-center gap-2">
          <Image src={logo} width={40} height={40} alt="Logo" className="" />
          <h1 className="font-bold text-xl">liquidX</h1>
        </div>
      </div>
      <div className="lg:flex gap-2 items-center justify-between hidden">
        {/* <Input
          placeholder="Search pools"
          className="ml-2 lg:w-[300px] md:w-[150px]"
        />
        <Button className="mx-4 -ml-1 flex bg-primary-500 hover:bg-transparent hover:text-primary">
          <IoMdSearch size={22} />
        </Button> */}
      </div>
      <div className="lg:flex items-center justify-between hidden md:w-1/2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex gap-2 items-center">
                <FaHeart size={22} className="text-primary-500" />
                <p className="text-xs">{account ? "1.54" : "--"}</p>
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
                <p className="text-xs">{account ? "770" : "--"}/1000</p>
              </div>
            </TooltipTrigger>
            <TooltipContent sideOffset={10}>Credit score</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="mr-1">
          {/* connect button */}
          {account ? (
            <div className="flex flex-col items-end mx-2 shadow-md p-2 rounded-md bg-primary-500 px-4 cursor-pointer">
              <p className="text-sm font-medium text-white kanit-bold">
                {account.slice(0, 6)}...{account.slice(-4)}
              </p>
              {chainId && (
                <p className="text-xs text-gray-300">
                  {getNetworkName(chainId)}
                </p>
              )}
            </div>
          ) : (
            <Button className="flex bg-primary-500" onClick={connectWallet}>
              Connect Wallet
            </Button>
          )}
        </div>
      </div>
      <div className="flex lg:hidden mx-1">
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
