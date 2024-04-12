/*
The contents of this file are largely based upon
https://github.com/shadcn-ui/ui/blob/1f0a7008d6194e2c45b4ec250683e155f34be13f/apps/www/components/command-menu.tsx
Copyright (c) 2023 shadcn
shadcn licenses the referenced file to Van Mildert JCR under the MIT license.

Copyright (c) 2024 Van Mildert JCR
All rights reserved.
 */

"use client";

import * as React from "react"
import { useRouter } from "next/navigation"
import { DialogProps } from "@radix-ui/react-alert-dialog"
import {
  CircleIcon,
  FileIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon
} from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { navConfig } from "@/config/nav";
import { MainNavItem, NavItem, SidebarNavItem } from "@/types/nav";

type Command = () => unknown
type CommandRunner = (command: Command) => void

type MainNavCommandProps = {
  runCommand: CommandRunner
  itemConfig: MainNavItem
}

const MainNavCommand = React.forwardRef<
  React.ElementRef<typeof CommandItem>,
  React.ComponentPropsWithoutRef<typeof CommandItem> & MainNavCommandProps
>(
  ({ runCommand, itemConfig, ...props }, ref) => {
    const router = useRouter();

    function command() {
      if (!itemConfig.href) return
      router.push(itemConfig.href)
    }

    return (
      <CommandItem
        ref={ref}
        value={itemConfig.title}
        disabled={false}
        onSelect={() => runCommand(command)}
        {...props}
      >
        <FileIcon className="mr-2 h-4 w-4" />
        {itemConfig.title}
      </CommandItem>
    )
  }
)
MainNavCommand.displayName = "MainNavCommand"

type MainNavCommandGroupProps = {
  runCommand: CommandRunner
}

function MainNavCommandGroup({ runCommand, ...props }: MainNavCommandGroupProps) {
  return (
    <CommandGroup heading="Links" {...props}>
      {
        navConfig.mainNavItems
          .filter((item) => !item.external)
          .map((item, index) => <MainNavCommand key={index} itemConfig={item} runCommand={runCommand} />)
      }
    </CommandGroup>
  )
}

type SidebarNavCommandProps = {
  runCommand: CommandRunner
  itemConfig: NavItem
}

const SidebarNavCommand = React.forwardRef<
  React.ElementRef<typeof CommandItem>,
  React.ComponentPropsWithoutRef<typeof CommandItem> & SidebarNavCommandProps
>(
  ({ runCommand, itemConfig, ...props }, ref) => {
    const router = useRouter();

    function command() {
      if (!itemConfig.href) return
      router.push(itemConfig.href)
    }

    return (
      <CommandItem
        ref={ref}
        value={itemConfig.title}
        onSelect={() => runCommand(command)}
        {...props}
      >
        <div className="mr-2 flex h-4 w-4 items-center justify-center">
          <CircleIcon className="h-3 w-3" />
        </div>
        {itemConfig.title}
      </CommandItem>
    )
  }
)
SidebarNavCommand.displayName = "SidebarNavCommand"

type SidebarNavCommandGroupProps = {
  runCommand: CommandRunner
  itemConfig: SidebarNavItem
}

const SidebarNavCommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandGroup>,
  React.ComponentPropsWithoutRef<typeof CommandGroup> & SidebarNavCommandGroupProps
>(
  ({ runCommand, itemConfig, ...props }, ref) => {
    return (
      <CommandGroup
        ref={ref}
        heading={itemConfig.title}
      >
        <MainNavCommand runCommand={runCommand} itemConfig={itemConfig} />
        {
          itemConfig.items.map((subItem, index) => <SidebarNavCommand key={index} runCommand={runCommand} itemConfig={subItem} />)
        }
      </CommandGroup>
    )
  }
)
SidebarNavCommandGroup.displayName = "SidebarNavCommandGroup"

type SidebarNavCommandGroupsProps = {
  runCommand: CommandRunner
}

function SidebarNavCommandGroups({ runCommand, ...props }: SidebarNavCommandGroupsProps) {
  return (
    <>
      {
        navConfig.sidebarNavItems
          .map((item, index) => <SidebarNavCommandGroup key={index} runCommand={runCommand} itemConfig={item} />)
      }
    </>
  )

}
type ThemeCommandGroupProps = {
  runCommand: CommandRunner
}

function ThemeCommandGroup({ runCommand, ...props }: ThemeCommandGroupProps) {
  const { setTheme } = useTheme()

  return (
    <CommandGroup heading="Theme">
      <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
        <SunIcon className="mr-2 h-4 w-4" />
        Light
      </CommandItem>
      <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
        <MoonIcon className="mr-2 h-4 w-4" />
        Dark
      </CommandItem>
      <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
        <LaptopIcon className="mr-2 h-4 w-4" />
        System
      </CommandItem>
    </CommandGroup>
  )
}

export function CommandMenu({ ...props }: DialogProps){
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    /**
     * Toggles the command bar when `ctrl` + `K` or `/` is pressed.
     *
     * @param event
     */
    function down(event: KeyboardEvent) {
      if (!(event.key === "k" && (event.metaKey || event.ctrlKey)) && event.key !== "/") return
      if (event.target instanceof HTMLElement && event.target.isContentEditable) return
      if (event.target instanceof HTMLInputElement) return
      if (event.target instanceof HTMLTextAreaElement) return
      if (event.target instanceof HTMLSelectElement) return

      event.preventDefault()
      setOpen((open) => !open)
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  })

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search resources...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or query..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <MainNavCommandGroup runCommand={runCommand} />
          <SidebarNavCommandGroups runCommand={runCommand} />
          <CommandSeparator />
          <ThemeCommandGroup runCommand={runCommand}/>
        </CommandList>
      </CommandDialog>
    </>
  )
}
