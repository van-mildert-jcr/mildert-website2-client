"use client";

import * as React from "react"

import { TileGridContext, TileGridContextProps } from "@/components/ui/tile-grid/tile-grid-context"
import { useCanHover } from "@/lib/hooks/canHover";
import { cn } from "@/lib/utils"

type TileGridProps = {

} & Partial<TileGridContextProps>

const TileGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & TileGridProps
>(
  (
    {
      className,
      children,
      useHoverDisplay,
      ...props
    },
    ref
  ) => {
    const canHover = useCanHover();

    const contextProps = {
      useHoverDisplay: useHoverDisplay ?? true,
    }

    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1 gap-6 lg:gap-12",
          contextProps.useHoverDisplay && canHover
            ? "lg:grid-cols-3"
            : "lg:grid-cols-2",
          className,
        )}
        {...props}
      >
        <TileGridContext.Provider value={contextProps}>
          {children}
        </TileGridContext.Provider>
      </div>
    )
  }
)
TileGrid.displayName = "TileGrid"

export {
  TileGrid,
  type TileGridProps,
}
