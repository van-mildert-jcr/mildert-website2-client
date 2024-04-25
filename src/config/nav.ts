import { MainNavItem, SidebarNavItem } from "@/types/nav"

type NavConfig = {
  mainNavItems: MainNavItem[]
  sidebarNavItems: SidebarNavItem[]
}

export const navConfig: NavConfig = {
  mainNavItems: [
    {
      title: "Resources",
      href: "/resources/events",
      activePathnamePrefix: "/resources"
    },
    {
      title: "JCR",
      href: "/jcr",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    }
  ],
  sidebarNavItems: [
    {
      title: "Events",
      href: "/resources/events",
      items: [
        {
          title: "Summer Ball",
          href: "/resources/events/summer-ball",
        },
        {
          title: "Winter Ball",
          href: "/resources/events/winter-ball",
        },
        {
          title: "BOPs",
          href: "/resources/events/bops",
        },
        {
          title: "Mildert Day",
          href: "/resources/events/mildert-day",
        },
        {
          title: "Formals",
          href: "/resources/events/mildert-day",
        },
        {
          title: "Fashion Show",
          href: "/resources/events/fashion-show",
        }
      ],
    },
    {
      title: "Outreach",
      href: "/resources/outreach",
      items: [
        {
          title: "Young Persons' Project",
          href: "/resources/outreach/young-persons-project",
        },
        {
          title: "Community Visiting Scheme",
          href: "/resources/outreach/community-visiting-scheme",
        },
        {
          title: "Queer Awareness Project",
          href: "/resources/outreach/queer-awareness-project",
        },
      ],
    },
    {
      title: "Sports and Societies",
      href: "/resources/sports-and-societies",
      items: [],
    },
    {
      title: "Freshers '24",
      href: "/resources/freshers",
      items: [],
    },
    {
      title: "Welfare",
      href: "/resources/welfare",
      items: [],
    },
    {
      title: "Committees",
      href: "/resources/committees",
      items: [],
    },
    {
      title: "Facilities",
      href: "/resources/facilities",
      items: [],
    }
  ],
}
