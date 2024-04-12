/*
The contents of this file are largely based upon
https://github.com/shadcn-ui/ui/blob/1f0a7008d6194e2c45b4ec250683e155f34be13f/apps/www/components/mobile-nav.tsx
Copyright (c) 2023 shadcn
shadcn licenses the referenced file to Van Mildert JCR under the MIT license.

Copyright (c) 2024 Van Mildert JCR
All rights reserved.
 */

"use client";

import * as React from "react";
import Link from "next/link"
import { usePathname } from "next/navigation"

import { navConfig } from "@/config/nav";
import { cn } from "@/lib/utils"
import { type NavItem, type SidebarNavItem } from "@/types/nav";


type SidebarNavSubItemProps = {
  itemConfig: NavItem
  pathname: string
}

type SidebarNavItemProps = {
  itemConfig: SidebarNavItem
  pathname: string
}

const SidebarNavSubItem = React.forwardRef<
  HTMLSpanElement & HTMLAnchorElement,
  React.HTMLAttributes<HTMLSpanElement & HTMLAnchorElement> & SidebarNavSubItemProps
>(
  (
    {itemConfig, pathname, ...props}, ref
  ) => {
    if (itemConfig.disabled) return null

    function ItemLabelForSpan() {
      if (!itemConfig.label) return null;

      return (
        <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
          {itemConfig.label}
        </span>
      )
    }

    function ItemLabelForLink() {
      if (!itemConfig.label) return null;

      return (
        <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
          {itemConfig.label}
        </span>
      )
    }

    if (!itemConfig.href) {
      return (
        <span
          ref={ref}
          className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
        >
          {itemConfig.title}
          <ItemLabelForSpan />
        </span>
      )
    }

    return (
      <Link
        ref={ref}
        href={itemConfig.href}
        className={cn(
          "group flex w-full items-center rounded-md border-transparent px-2 py-1 hover:underline",
          pathname?.match(new RegExp(`^${itemConfig.href}\\b`))
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        {itemConfig.title}
        <ItemLabelForLink />
      </Link>
    )
  }
)
SidebarNavSubItem.displayName = "SidebarNavSubItem"

const SidebarNavItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & SidebarNavItemProps
>(
  (
    {itemConfig, pathname, ...props}, ref
  ) => {
    function Heading() {
      if (!itemConfig.href) return (
        <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">{itemConfig.title}</h4>
      )

      return (
        <Link href={itemConfig.href}>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold hover:underline">{itemConfig.title}</h4>
        </Link>
      )
    }

    function SubItems() {
      if (itemConfig.items.length == 0) return null

      return (
        <div className="grid grid-flow-row auto-rows-max text-sm">
          {itemConfig.items?.map(
          (subItem, index) => (<SidebarNavSubItem key={index} itemConfig={subItem} pathname={pathname}/>)
        )}
        </div>
      )
    }

    return (
      <div ref={ref} {...props} className="pb-4">
        <Heading />
        <SubItems />
      </div>
    )
  }
)
SidebarNavItem.displayName = "SidebarNavItem"

export function SidebarNav() {
  const pathname = usePathname();

  if (navConfig.sidebarNavItems.length == 0) return null;

  return (
    <div className="w-full">
      {navConfig.sidebarNavItems.map(
        (item, index) => (<SidebarNavItem key={index} itemConfig={item} pathname={pathname} />)
      )}
    </div>
  )
}
