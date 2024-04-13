"use client";

import * as React from "react";

import { useCanHover } from "@/lib/hooks/canHover";
import { cn } from "@/lib/utils";

import { TileContext } from "@/components/ui/tile-grid/tile-context";
import { TileGridContext } from "@/components/ui/tile-grid/tile-grid-context";

const TileForeground = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(
  ({ className, children, ...props }, ref) => {
    const tileContext = React.useContext(TileContext)
    const gridContext = React.useContext(TileGridContext)
    const canHover = useCanHover()

    const useHoverDisplay = canHover && (gridContext?.useHoverDisplay ?? true)

    return (
      <div
        ref={ref}
        className={cn(
          "absolute h-full",
          useHoverDisplay
            ? "w-full opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-500"
            : "w-1/2",
          !useHoverDisplay && (tileContext?.alignForeground === "right" ? "right-0" : "left-0"),
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TileForeground.displayName = "TileHover"

export {
  TileForeground,
}
