"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Lightbulb, TrendingUp, AlertCircle, CheckCircle, Sparkles } from "lucide-react"

export function NutritionInsights() {
  const macroBreakdown = [
    { name: "Protein", value: 125, goal: 150, percentage: 83, color: "bg-chart-1" },
    { name: "Carbs", value: 180, goal: 200, percentage: 90, color: "bg-chart-2" },
    { name: "Fat", value: 55, goal: 65, percentage: 85, color: "bg-chart-4" },
  ]

  const insights = [
    {
      type: "success",
      icon: CheckCircle,
      title: "Great Protein Intake",
      description: "You're consistently hitting 80%+ of your protein goals",
      color: "text-success",
    },
    {
      type: "warning",
      icon: AlertCircle,
      title: "Low Fiber Intake",
      description: "Try adding more vegetables and whole grains",
      color: "text-chart-4",
    },
    {
      type: "tip",
      icon: Lightbulb,
      title: "Meal Timing Tip",
      description: "Consider eating protein within 2 hours post-workout",
      color: "text-secondary",
    },
  ]

  const weeklyTrends = [
    { day: "Mon", protein: 120, carbs: 180, fat: 60 },
    { day: "Tue", protein: 135, carbs: 170, fat: 55 },
    { day: "Wed", protein: 125, carbs: 190, fat: 58 },
    { day: "Thu", protein: 140, carbs: 175, fat: 52 },
    { day: "Fri", protein: 130, carbs: 185, fat: 60 },
    { day: "Sat", protein: 115, carbs: 200, fat: 65 },
    { day: "Sun", protein: 125, carbs: 180, fat: 55 },
  ]

  const topFoods = [
    { name: "Chicken Breast", count: 12, protein: 31, calories: 165 },
    { name: "Brown Rice", count: 10, carbs: 45, calories: 215 },
    { name: "Greek Yogurt", count: 8, protein: 17, calories: 100 },
  ]

  const micronutrients = [
    { name: "Vitamin D", value: 65, status: "low" },
    { name: "Iron", value: 85, status: "good" },
    { name: "Calcium", value: 92, status: "good" },
    { name: "Vitamin B12", value: 78, status: "good" },
  ]

  return (
    <div className="mx-auto max-w-md space-y-6 p-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Insights</h1>
        <p className="text-muted-foreground">AI-powered nutrition analysis</p>
      </div>

      {/* AI Insights */}
      <Card className="p-6 space-y-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <p className="font-semibold">AI Recommendations</p>
        </div>
        <div className="space-y-3">
          {insights.map((insight, index) => {
            const Icon = insight.icon
            return (
              <div key={index} className="flex gap-3 p-3 rounded-lg bg-card">
                <Icon className={`h-5 w-5 mt-0.5 ${insight.color}`} />
                <div className="flex-1">
                  <p className="font-medium text-sm">{insight.title}</p>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Card>

      {/* Macro Breakdown */}
      <Card className="p-6 space-y-4">
        <p className="font-semibold">Today's Macros</p>
        <div className="space-y-4">
          {macroBreakdown.map((macro) => (
            <div key={macro.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{macro.name}</p>
                <p className="text-sm text-muted-foreground">
                  {macro.value}g / {macro.goal}g
                </p>
              </div>
              <div className="relative">
                <Progress value={macro.percentage} className="h-3" />
                <div
                  className={`absolute top-0 left-0 h-3 rounded-full ${macro.color}`}
                  style={{ width: `${macro.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Weekly Trends */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <p className="font-semibold">Weekly Trends</p>
        </div>
        <div className="h-48 flex items-end justify-between gap-1">
          {weeklyTrends.map((day, index) => {
            const total = day.protein + day.carbs + day.fat
            const maxTotal = 400
            const height = (total / maxTotal) * 100
            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full space-y-0.5">
                  <div
                    className="w-full bg-chart-1 rounded-t"
                    style={{ height: `${(day.protein / maxTotal) * 150}px` }}
                  />
                  <div className="w-full bg-chart-2" style={{ height: `${(day.carbs / maxTotal) * 150}px` }} />
                  <div className="w-full bg-chart-4 rounded-b" style={{ height: `${(day.fat / maxTotal) * 150}px` }} />
                </div>
                <p className="text-xs font-medium">{day.day}</p>
              </div>
            )
          })}
        </div>
        <div className="flex items-center justify-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-chart-1" />
            <span>Protein</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-chart-2" />
            <span>Carbs</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-chart-4" />
            <span>Fat</span>
          </div>
        </div>
      </Card>

      {/* Top Foods */}
      <Card className="p-6 space-y-4">
        <p className="font-semibold">Most Eaten This Week</p>
        <div className="space-y-3">
          {topFoods.map((food, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex-1">
                <p className="font-medium text-sm">{food.name}</p>
                <p className="text-xs text-muted-foreground">{food.count} times this week</p>
              </div>
              <div className="text-right">
                <Badge variant="secondary" className="text-xs">
                  {food.calories} cal
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Micronutrients */}
      <Card className="p-6 space-y-4">
        <p className="font-semibold">Micronutrient Status</p>
        <div className="grid grid-cols-2 gap-3">
          {micronutrients.map((nutrient, index) => (
            <div key={index} className="p-3 rounded-lg bg-muted/50">
              <p className="text-sm font-medium mb-2">{nutrient.name}</p>
              <div className="flex items-center gap-2">
                <Progress value={nutrient.value} className="h-2 flex-1" />
                <p className="text-xs font-medium">{nutrient.value}%</p>
              </div>
              <Badge variant={nutrient.status === "good" ? "default" : "secondary"} className="text-xs mt-2">
                {nutrient.status === "good" ? "Good" : "Low"}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Hydration Reminder */}
      <Card className="p-6 bg-secondary/10">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
            <span className="text-2xl">💧</span>
          </div>
          <div className="flex-1">
            <p className="font-semibold">Stay Hydrated</p>
            <p className="text-sm text-muted-foreground">You've had 6/8 glasses today</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">75%</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
