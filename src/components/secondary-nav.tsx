import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SecondaryNav() {
  return (
    <nav className="flex items-center gap-2 text-sm">
      <Button asChild>
        <Link href="/donate">Donate</Link>
      </Button>
      <Button asChild>
        <Link href="/dashboard">Dashboard</Link>
      </Button>
    </nav>
  )
}
