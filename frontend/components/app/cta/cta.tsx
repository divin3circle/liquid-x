"use client";
import { TypewriterEffectSmooth } from "../../ui/typewritter-effect";

export function CTA() {
  const words = [
    {
      text: "Simplify",
    },
    {
      text: "your",
    },
    {
      text: "DeFi",
    },
    {
      text: "journey",
    },
    {
      text: "with",
    },
    {
      text: "LiquidX.",
      className: "text-blue-500 font-bold",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-neutral-100 to-white w-full dark:to-neutral-950 dark:from-neutral-800">
      <div className="flex flex-col items-center justify-center h-[40rem] ">
        <p className="text-neutral-600 text-sm px-2 sm:text-base dark:text-text-100">
          Experience unified liquidity management across multiple blockchains
          effortlessly
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-primary-500 border border-transparent text-white text-sm">
            Get Started
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
