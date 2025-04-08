import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center text-black justify-center whitespace-nowrap text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[#00e187] hover:bg-[#00ff99]",
        primary: "bg-[#00e187] text-white",
        outline:
          "border border-[#00e187] bg-transparent text-[#00e187] hover:bg-[#00e187] hover:text-[#00e187]",
      },
      size: {
        default: "h-[49px] px-6 py-2 rounded-0",
        md: "h-[42px] px-6",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
