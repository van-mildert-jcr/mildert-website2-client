"use client";

import * as React from "react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { TileContext, TileContextProps } from "@/components/ui/tile-grid/tile-context"
import { useCanHover } from "@/lib/hooks/canHover"
import { cn } from "@/lib/utils"

type TileProps = {

} & Partial<TileContextProps>

const Tile = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & TileProps
>(
  (
    {
      className,
      children,
      alignForeground,
      ...props
    },
    ref
  ) => {
    const canHover = useCanHover();

    const contextProps: TileContextProps = {
      alignForeground: alignForeground ?? "left",
    }

    return (
      <AspectRatio
        ratio={canHover ? 1 : 2}
        ref={ref}
        className={cn("group bg-accent", className)}
        {...props}
      >
        <div className="relative h-full">
          <TileContext.Provider value={contextProps}>
            {children}
          </TileContext.Provider>
        </div>
      </AspectRatio>
    )
  }
)
Tile.displayName = "Tile"

export {
  Tile,
}
