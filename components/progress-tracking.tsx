"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingDown, TrendingUp, Target, Calendar, Award, Zap } from "lucide-react"

export function ProgressTracking() {
  const [timeRange, setTimeRange] = useState("month")

  const weightData = [
    { week: "Week 1", weight: 75.2, change: -0.5 },
    { week: "Week 2", weight: 74.8, change: -0.4 },
    { week: "Week 3", weight: 74.3, change: -0.5 },
    { week: "Week 4", weight: 73.9, change: -0.4 },
  ]

  const achievements = [
    { title: "7 Day Streak", icon: Award, color: "text-chart-1" },
    { title: "Goal Reached", icon: Target, color: "text-chart-2" },
    { title: "Consistency King", icon: Zap, color: "text-chart-4" },
  ]

  const stats = [
    { label: "Avg Calories", value: "1,850", change: "-5%", trend: "down" },
    { label: "Avg Protein", value: "125g", change: "+12%", trend: "up" },
    { label: "Workout Days", value: "18", change: "+3", trend: "up" },
    { label: "Steps/Day", value: "8,450", change: "+850", trend: "up" },
  ]

  return (
    <div className="mx-auto max-w-md space-y-6 p-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Progress</h1>
        <p className="text-muted-foreground">Track your transformation</p>
      </div>

      {/* Time Range Selector */}
      <Tabs value={timeRange} onValueChange={setTimeRange} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="year">Year</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Weight Progress Card */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Current Weight</p>
            <p className="text-3xl font-bold">73.9 kg</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Goal</p>
            <p className="text-2xl font-bold text-primary">70.0 kg</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <TrendingDown className="h-5 w-5 text-success" />
          <p className="text-sm font-medium text-success">Lost 1.8 kg this month</p>
        </div>
        <div className="h-48 flex items-end justify-between gap-2">
          {weightData.map((data, index) => {
            const maxWeight = 76
            const minWeight = 73
            const height = ((data.weight - minWeight) / (maxWeight - minWeight)) * 100
            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="relative w-full">
                  <div
                    className="w-full bg-primary rounded-t transition-all hover:bg-primary/80"
                    style={{ height: `${height * 1.5}px` }}
                  />
                  <p className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium whitespace-nowrap">
                    {data.weight}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium">{data.week.split(" ")[1]}</p>
                  <Badge variant={data.change < 0 ? "default" : "secondary"} className="text-xs mt-1">
                    {data.change > 0 ? "+" : ""}
                    {data.change}
                  </Badge>
                </div>
              </div>
            )
          })}
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4">
            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
            <p className="text-2xl font-bold mb-2">{stat.value}</p>
            <div className="flex items-center gap-1">
              {stat.trend === "up" ? (
                <TrendingUp className="h-4 w-4 text-success" />
              ) : (
                <TrendingDown className="h-4 w-4 text-success" />
              )}
              <p className="text-sm font-medium text-success">{stat.change}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Achievements */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5 text-chart-4" />
          <p className="font-semibold">Recent Achievements</p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div key={index} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background">
                  <Icon className={`h-6 w-6 ${achievement.color}`} />
                </div>
                <p className="text-xs text-center font-medium leading-tight">{achievement.title}</p>
              </div>
            )
          })}
        </div>
      </Card>

      {/* Body Measurements */}
      <Card className="p-6 space-y-4">
        <p className="font-semibold">Body Measurements</p>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Waist</p>
            <div className="flex items-center gap-2">
              <p className="font-medium">82 cm</p>
              <Badge variant="outline" className="text-xs">
                -3 cm
              </Badge>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Chest</p>
            <div className="flex items-center gap-2">
              <p className="font-medium">98 cm</p>
              <Badge variant="outline" className="text-xs">
                +2 cm
              </Badge>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Arms</p>
            <div className="flex items-center gap-2">
              <p className="font-medium">35 cm</p>
              <Badge variant="outline" className="text-xs">
                +1 cm
              </Badge>
            </div>
          </div>
        </div>
        <Button variant="outline" className="w-full bg-transparent">
          <Calendar className="mr-2 h-4 w-4" />
          Update Measurements
        </Button>
      </Card>

      {/* Milestone Progress */}
      <Card className="p-6 space-y-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Next Milestone</p>
            <p className="text-xl font-bold">72.0 kg</p>
          </div>
          <Target className="h-8 w-8 text-primary" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">49%</span>
          </div>
          <div className="h-3 rounded-full bg-background overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: "49%" }} />
          </div>
          <p className="text-xs text-muted-foreground">1.9 kg to go</p>
        </div>
      </Card>
    </div>
  )
}
