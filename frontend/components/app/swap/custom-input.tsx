import * as React from "react";
import liquidXLogo from "../../../public/liquidsvg.svg";
import Image from "next/image";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex items-center justify-center w-[80%] border border-input  rounded-md">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full bg-transparent outline-none px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <div className="flex items-center justify-center bg-gray-300 rounded-full px-2 py-1 mx-2">
          <h1 className="kanit-regular text-xs">XNES</h1>
          <Image
            src={liquidXLogo}
            width={20}
            height={20}
            alt="Logo"
            className="object-contain bg-gray-300 rounded-full"
          />
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
