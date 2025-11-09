import { MobileNav } from "@/components/mobile-nav"
import { CommunityChallenges } from "@/components/community-challenges"

export default function CommunityPage() {
  return (
    <main className="min-h-screen pb-20">
      <CommunityChallenges />
      <MobileNav />
    </main>
  )
}
