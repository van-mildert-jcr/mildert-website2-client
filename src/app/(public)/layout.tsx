import React from "react";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <main className="flex-1">
      {children}
    </main>
  );
}
