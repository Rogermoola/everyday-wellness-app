import { MobileNav } from "@/components/mobile-nav"
import { FoodLogging } from "@/components/food-logging"

export default function LogPage() {
  return (
    <main className="min-h-screen pb-20">
      <FoodLogging />
      <MobileNav />
    </main>
  )
}
