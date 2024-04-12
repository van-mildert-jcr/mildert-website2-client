import { Icons } from "@/components/icons"

type NavItem = {
  title: string
  href?: string
  activePathnamePrefix?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
}

type NavItemWithChildren = {
  items: NavItem[]
} & NavItem

type MainNavItem = NavItem
type SidebarNavItem = NavItemWithChildren

export {
  type NavItem,
  type NavItemWithChildren,
  type MainNavItem,
  type SidebarNavItem
}
