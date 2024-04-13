"use client";

import * as React from "react";

import { useCanHover } from "@/lib/hooks/canHover";
import { cn } from "@/lib/utils";

import { TileContext } from "./tile-context"
import {TileGridContext} from "@/components/ui/tile-grid/tile-grid-context";

const TileBackground = React.forwardRef<
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
        className={cn(
          "absolute h-full",
          useHoverDisplay ? "w-full" : "w-1/2",
          !useHoverDisplay && (tileContext?.alignForeground === "right" ? "left-0" : "right-0"),
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TileBackground.displayName = "TileBackground"

export {
  TileBackground,
}
