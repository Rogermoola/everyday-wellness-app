"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Utensils, Calendar, TrendingUp, Users, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/log", icon: Utensils, label: "Log Food" },
    { href: "/plan", icon: Calendar, label: "Plan" },
    { href: "/progress", icon: TrendingUp, label: "Progress" },
    { href: "/community", icon: Users, label: "Community" },
  ]

  return (
    <>
      {/* Floating Add Button */}
      <Button size="icon" className="fixed bottom-20 right-6 z-50 h-14 w-14 rounded-full shadow-lg">
        <Plus className="h-6 w-6" />
        <span className="sr-only">Quick Add</span>
      </Button>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t bg-card">
        <div className="mx-auto flex max-w-md items-center justify-around px-4 py-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-2 text-xs transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
