import Image from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils";

const TileImage = React.forwardRef<
  React.ElementRef<typeof Image>,
  React.ComponentPropsWithoutRef<typeof Image>
>(
  ({ className, ...props }, ref) => {
    return (
      <Image ref={ref} className={cn("w-full h-full object-cover")} {...props} />
    )
  }
)
TileImage.displayName = "TileBackgroundImage"

export {
  TileImage,
}
