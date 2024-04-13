"use client";

import * as React from "react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useCanHover } from "@/lib/hooks/canHover"
import { cn } from "@/lib/utils"

const Tile = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({className, children, ...props}, ref) => {
    const canHover = useCanHover();

    return (
      <AspectRatio
        ratio={1}
        ref={ref}
        className={cn("group", className)}
        {...props}
      >
        <div className="relative h-full">
          {children}
        </div>
      </AspectRatio>
    )
  }
)
Tile.displayName = "Tile"

export {
  Tile,
}
