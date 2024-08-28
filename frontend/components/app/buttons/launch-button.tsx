"use client";
import React from "react";
import { ButtonsCard } from "../../ui/tailwindcss-buttons";

export function CustomButton({
  trigger,
  title,
}: {
  trigger?: () => void;
  title: string;
}) {
  return (
    // <ButtonsCard onClick={() => {}}>
    <button className="px-8 py-2 border border-primary-900 bg-transparent text-black relative group transition duration-200">
      <div className="absolute -bottom-2 -right-2 bg-primary-500 font-bold text-white h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
      <span className="relative text-white font-bold">{title}</span>
    </button>
    // </ButtonsCard>
  );
}