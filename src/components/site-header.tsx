/*
The contents of this file are largely based upon
https://github.com/shadcn-ui/ui/blob/1f0a7008d6194e2c45b4ec250683e155f34be13f/apps/www/components/site-header.tsx
Copyright (c) 2023 shadcn
shadcn licenses the referenced file to Van Mildert JCR under the MIT license.

Copyright (c) 2024 Van Mildert JCR
All rights reserved.
 */

import * as React from "react";
import Link from "next/link";
import { PersonIcon } from "@radix-ui/react-icons";
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { SecondaryNav } from "@/components/secondary-nav";
import { ColourModeToggle } from "@/components/colour-mode-toggle"
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-bord  er/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* left-aligned nav (desktop only) */}
        <MainNav />
        <MobileNav />

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Persistent nav (desktop + mobile) */}
            <SecondaryNav />
          </div>

          {/* Icon nav (socials, colour mode, dashboard) */}
          <nav className="flex items-center">
            <ColourModeToggle />
            <Button variant="ghost" className="w-9 px-0" asChild>
              <Link href="/dashboard">
                <PersonIcon className="h-[1.2rem] w-[1.2rem]"/>
              </Link>
            </Button>
          </nav>
        </div>

      </div>
    </header>
  )
}
