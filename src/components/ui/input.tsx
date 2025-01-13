// input.tsx
import * as React from "react";
import { InputProps } from "../product_registration/types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`flex h-10 w-full rounded-md border border-border 
          bg-inputBg px-3 py-2 text-sm text-text ring-offset-background 
          file:border-0 file:bg-transparent file:text-sm file:font-medium 
          placeholder:text-secondaryText focus-visible:outline-none 
          focus-visible:ring-2 focus-visible:ring-primary 
          disabled:cursor-not-allowed disabled:opacity-50
          ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
