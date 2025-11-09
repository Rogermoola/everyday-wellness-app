"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Trophy, Users, Flame, Target, Clock, TrendingUp } from "lucide-react"

export function CommunityChallenges() {
  const activeChallenges = [
    {
      title: "30-Day Protein Challenge",
      participants: 1247,
      daysLeft: 12,
      progress: 60,
      reward: "Gold Badge",
      icon: Target,
    },
    {
      title: "10K Steps Daily",
      participants: 3521,
      daysLeft: 5,
      progress: 83,
      reward: "Step Master",
      icon: TrendingUp,
    },
  ]

  const leaderboard = [
    { rank: 1, name: "Sarah M.", points: 2450, avatar: "/diverse-woman-portrait.png" },
    { rank: 2, name: "Mike T.", points: 2380, avatar: "/man.jpg" },
    { rank: 3, name: "Emma L.", points: 2310, avatar: "/diverse-woman-portrait.png" },
    { rank: 4, name: "You", points: 2180, avatar: "/diverse-group.png", isUser: true },
    { rank: 5, name: "John D.", points: 2050, avatar: "/man.jpg" },
  ]

  const recentActivity = [
    {
      user: "Alex K.",
      action: "completed",
      challenge: "7-Day Streak",
      time: "2h ago",
      avatar: "/diverse-group.png",
    },
    {
      user: "Maria S.",
      action: "joined",
      challenge: "Protein Challenge",
      time: "4h ago",
      avatar: "/diverse-woman-portrait.png",
    },
    {
      user: "David R.",
      action: "achieved",
      challenge: "10K Steps",
      time: "6h ago",
      avatar: "/man.jpg",
    },
  ]

  const upcomingChallenges = [
    { title: "February Fitness Blast", startDate: "Feb 1", participants: 0, icon: Flame },
    { title: "Meal Prep Masters", startDate: "Feb 5", participants: 0, icon: Users },
  ]

  return (
    <div className="mx-auto max-w-md space-y-6 p-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Community</h1>
        <p className="text-muted-foreground">Join challenges and compete</p>
      </div>

      {/* Your Stats */}
      <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/abstract-geometric-shapes.png" />
              <AvatarFallback>You</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-lg">Alex</p>
              <Badge variant="secondary">Level 12</Badge>
            </div>
          </div>
          <Trophy className="h-8 w-8 text-chart-4" />
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">2,180</p>
            <p className="text-xs text-muted-foreground">Points</p>
          </div>
          <div>
            <p className="text-2xl font-bold">8</p>
            <p className="text-xs text-muted-foreground">Badges</p>
          </div>
          <div>
            <p className="text-2xl font-bold">4th</p>
            <p className="text-xs text-muted-foreground">Rank</p>
          </div>
        </div>
      </Card>

      {/* Active Challenges */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Active Challenges</h2>
        {activeChallenges.map((challenge, index) => {
          const Icon = challenge.icon
          return (
            <Card key={index} className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{challenge.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        <Users className="h-3 w-3 mr-1" />
                        {challenge.participants.toLocaleString()}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {challenge.daysLeft}d left
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Your Progress</span>
                  <span className="font-medium">{challenge.progress}%</span>
                </div>
                <Progress value={challenge.progress} className="h-2" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-chart-4" />
                  <span className="text-sm text-muted-foreground">Reward: {challenge.reward}</span>
                </div>
                <Button size="sm">View</Button>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Leaderboard */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-chart-4" />
          <p className="font-semibold">This Week's Leaderboard</p>
        </div>
        <div className="space-y-2">
          {leaderboard.map((entry) => (
            <div
              key={entry.rank}
              className={`flex items-center gap-3 p-3 rounded-lg ${
                entry.isUser ? "bg-primary/10 border border-primary/20" : "bg-muted/50"
              }`}
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background font-bold text-sm">
                {entry.rank}
              </div>
              <Avatar className="h-10 w-10">
                <AvatarImage src={entry.avatar || "/placeholder.svg"} />
                <AvatarFallback>{entry.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium text-sm">{entry.name}</p>
                <p className="text-xs text-muted-foreground">{entry.points.toLocaleString()} points</p>
              </div>
              {entry.rank <= 3 && <Trophy className={`h-5 w-5 text-chart-${entry.rank}`} />}
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-6 space-y-4">
        <p className="font-semibold">Recent Activity</p>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.avatar || "/placeholder.svg"} />
                <AvatarFallback>{activity.user[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>{" "}
                  <span className="font-medium">{activity.challenge}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Upcoming Challenges */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Upcoming Challenges</h2>
        {upcomingChallenges.map((challenge, index) => {
          const Icon = challenge.icon
          return (
            <Card key={index} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                    <Icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{challenge.title}</p>
                    <p className="text-xs text-muted-foreground">Starts {challenge.startDate}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Join
                </Button>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Motivation Card */}
      <Card className="p-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="flex items-center gap-3">
          <Flame className="h-8 w-8" />
          <div>
            <p className="text-lg font-bold">Keep Going!</p>
            <p className="text-sm opacity-90">You're in the top 10% this week</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
