import * as React from "react";
import Balancer from "react-wrap-balancer";

import { cn } from "@/lib/utils";

const TileContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "absolute w-full h-full flex flex-col items-center justify-center text-center text-3xl",
          className
        )}
      >
        <div className="p-3">
          <Balancer>{children}</Balancer>
        </div>
      </div>
    )
  }
)
TileContent.displayName = "TileContent"

export {
  TileContent,
}
