import React from "react";

type HomeLayoutProps = {
  children: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="border-b">
      <div className="container flex-1">
        {children}
      </div>
    </div>
  )
}
