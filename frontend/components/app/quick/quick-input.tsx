import * as React from "react";
import liquidXLogo from "../../../public/liquidsvg.svg";
import Image from "next/image";
import { chainImages } from "../swap/swap-utils";

import { cn } from "@/lib/utils";
import { CustomSelect } from "./custom-select";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex items-center justify-center border border-input  rounded-md">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full bg-transparent outline-none px-3 py-1 text-sm transition-colors placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <div className="flex items-center justify-center bg-gray-200 text-[0.2rem] rounded-full border-none mx-2">
          <CustomSelect />
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
