import * as React from "react"
import Image from "next/image"
import Link from "next/link";

import { cn } from "@/lib/utils"

const TileBackgroundImage = React.forwardRef<
  React.ElementRef<typeof Image>,
  React.ComponentPropsWithoutRef<typeof Image>
>(
  ({ className, ...props }, ref) => {
    return (
      <Image ref={ref} className={cn("w-full h-full object-cover")} {...props} />
    )
  }
)
TileBackgroundImage.displayName = "TileBackgroundImage"

const TileBackground = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={cn("absolute w-full h-full bg-accent", className)} ref={ref} {...props}>
        {children}
      </div>
    )
  }
)
TileBackground.displayName = "TileBackground"

const TileContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("absolute w-full h-full flex flex-col items-center justify-center text-3xl", className)}>
        {children}
      </div>
    )
  }
)
TileContent.displayName = "TileContent"

const TileForeground = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-500",
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

const TileGrid = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12",
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
  TileBackground,
  TileBackgroundImage,
  TileContent,
  TileGrid,
  TileForeground,
  TileLink,
}
