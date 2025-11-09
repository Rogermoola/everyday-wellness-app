import { MobileNav } from "@/components/mobile-nav"
import { MealPlanning } from "@/components/meal-planning"

export default function PlanPage() {
  return (
    <main className="min-h-screen pb-20">
      <MealPlanning />
      <MobileNav />
    </main>
  )
}
