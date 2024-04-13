import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

const TileLink = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(
  ({ children, className, ...props }, ref) => {
    return (
      <Link ref={ref} className={cn("absolute w-full h-full", className)} {...props}>
        {children}
      </Link>
    )
  }
)
TileLink.displayName = "TileLink"

export {
  TileLink,
}
