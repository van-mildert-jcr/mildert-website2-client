/*
The contents of this file are largely based upon
https://github.com/shadcn-ui/ui/blob/1f0a7008d6194e2c45b4ec250683e155f34be13f/apps/www/components/main-nav.tsx
Copyright (c) 2023 shadcn
shadcn licenses the referenced file to Van Mildert JCR under the MIT license.

Copyright (c) 2024 Van Mildert JCR
All rights reserved.
 */

"use client"

import * as React from "react"
import Link, {LinkProps} from "next/link"
import { usePathname } from "next/navigation"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button";
import { navConfig } from "@/config/nav";
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

function SiteTitle() {
  return (
    <Link href="/" className="mr-6 hidden lg:flex items-center space-x-2">
      <Icons.logo className="h-12 w-12" />
      <span className="inline-block font-bold text-nowrap whitespace-nowrap">
        {siteConfig.name}
      </span>
    </Link>
  )
}

type NavLinkProps = LinkProps & {
  activePathnamePrefix: string,
  children: React.ReactNode
}

export function MainNav() {
  const pathname = usePathname()

  function NavLink({ activePathnamePrefix, children, ...props }: NavLinkProps) {
    return (
      <Link
        {...props}
        className={
          cn(
            "transition-colors hover:text-foreground/80 text-nowrap whitespace-nowrap",
            pathname?.match(new RegExp(`^${activePathnamePrefix}\\b`))
              ? "text-foreground"
              : "text-foreground/60"
          )
        }
      >
        {children}
      </Link>
    )
  }

  return (
    <div className="mr-4 hidden sm:flex">
      <SiteTitle/>
      <nav className="items-center gap-6 text-sm hidden lg:flex">
        {
          navConfig.mainNavItems.map(
            (item, index) => {
              if (!item.href) return null;

              return (
                <NavLink key={index} href={item.href} activePathnamePrefix={item.activePathnamePrefix || item.href}>
                  {item.title}
                </NavLink>
              )
            }
          )
        }
        <Button asChild className="hidden xl:inline-block">
          <Link href="/donate">Donate</Link>
        </Button>
      </nav>
    </div>
  )
}
