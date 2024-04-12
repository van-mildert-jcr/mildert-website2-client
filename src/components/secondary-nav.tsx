import * as React from "react";
import { CommandMenu } from "@/components/command-menu";

export function SecondaryNav() {
  return (
    <nav className="flex items-center gap-2 text-sm">
      <CommandMenu />
    </nav>
  )
}
