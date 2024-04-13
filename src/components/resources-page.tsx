import * as React from "react"
import Balancer from "react-wrap-balancer"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { cn } from "@/lib/utils";


export function ResourcesPageBreadcrumb({ children, className, ...props }: React.ComponentPropsWithoutRef<typeof Breadcrumb>) {
  return (
    <Breadcrumb className={cn("mb-4", className)} {...props} >
      <BreadcrumbList>
        <BreadcrumbItem>
          Resources
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {children}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

type ResourcesPageTitleProps = {
  value: string
  description?: string
}

export function ResourcesPageTitle({className, value, description, ...props}: React.HTMLAttributes<HTMLDivElement> & ResourcesPageTitleProps) {
  function Description() {
    if (!description) return null
    return (
      <p className="text-lg text-muted-foreground">
        <Balancer>{description}</Balancer>
      </p>
    )
  }

  return (
    <div className={cn("space-y-2", className)}>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        {value}
      </h1>
      <Description />
    </div>
  )
}

export function ResourcesPage({children, className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <main className={cn("relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr]")}>
      <div className="mx-auto w-full min-w-0">
        {children}
      </div>
    </main>
  )
}
