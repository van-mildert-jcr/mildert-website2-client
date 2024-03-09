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

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

function SiteTitle() {
  return (
    <Link href="/" className="mr-6 flex items-center space-x-2">
      <Icons.logo className="h-12 w-12" />
      <span className="hidden font-bold sm:inline-block">
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
            "transition-colors hover:text-foreground/80",
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
    <div className="mr-4 hidden md:flex">
      <SiteTitle />
      <nav className="flex items-center gap-6 text-sm">
        <NavLink href="/events" activePathnamePrefix="/events">
          Events
        </NavLink>
        <NavLink href="/outreach" activePathnamePrefix="/outreach">
          Outreach
        </NavLink>
        <NavLink href="/sports-and-societies" activePathnamePrefix="/sports-and-societies">
          Sports & Socs
        </NavLink>
        <NavLink href="/freshers" activePathnamePrefix="/freshers">
          Freshers &apos;24
        </NavLink>
        <NavLink href="/welfare" activePathnamePrefix="/welfare">
          Welfare
        </NavLink>
        <NavLink href="/committees" activePathnamePrefix="/committees">
          Committees
        </NavLink>
        <NavLink href="/facilities" activePathnamePrefix="/facilities">
          Facilities
        </NavLink>
        <NavLink href="/jcr" activePathnamePrefix="/jcr">
          JCR
        </NavLink>
      </nav>
    </div>
  )
}
