import * as React from "react"

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils"

const Tile = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({children, ...props}, ref) => {
    return (
      <AspectRatio
        ratio={1}
        ref={ref}
        style={{background: "purple"}}
        {...props}
      >
        <div className="h-full flex flex-col items-center justify-center">
          {children}
        </div>
      </AspectRatio>
    )
  }
)
Tile.displayName = "Tile"

const TileGrid = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TileGrid.displayName = "TileGrid"

export {
  Tile,
  TileGrid
}
