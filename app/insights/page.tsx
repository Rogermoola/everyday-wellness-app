import { MobileNav } from "@/components/mobile-nav"
import { NutritionInsights } from "@/components/nutrition-insights"

export default function InsightsPage() {
  return (
    <main className="min-h-screen pb-20">
      <NutritionInsights />
      <MobileNav />
    </main>
  )
}
