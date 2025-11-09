"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Camera, Scan, Edit3, Footprints, TrendingUp, Flame } from "lucide-react"

export function HomeDashboard() {
  const userName = "Alex"
  const caloriesConsumed = 1450
  const caloriesGoal = 2000
  const caloriesProgress = (caloriesConsumed / caloriesGoal) * 100
  const steps = 6234
  const stepsGoal = 10000
  const stepsProgress = (steps / stepsGoal) * 100
  const weekProgress = 68

  return (
    <div className="mx-auto max-w-md space-y-6 p-6">
      {/* Hero Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Good Morning, {userName}</h1>
        <p className="text-lg text-muted-foreground">Let's Win Today.</p>
      </div>

      {/* Calorie Tracker */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Daily Calories</p>
            <p className="text-3xl font-bold">
              {caloriesConsumed}
              <span className="text-lg text-muted-foreground">/{caloriesGoal}</span>
            </p>
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-primary">
            <span className="text-lg font-bold">{Math.round(caloriesProgress)}%</span>
          </div>
        </div>
        <Progress value={caloriesProgress} className="h-3" />
      </Card>

      {/* Quick Add Actions */}
      <Card className="p-4">
        <p className="mb-3 text-sm font-semibold">Quick Add</p>
        <div className="grid grid-cols-3 gap-3">
          <Button variant="outline" className="flex flex-col gap-2 h-auto py-4 bg-transparent">
            <Camera className="h-5 w-5" />
            <span className="text-xs">AI Photo</span>
          </Button>
          <Button variant="outline" className="flex flex-col gap-2 h-auto py-4 bg-transparent">
            <Scan className="h-5 w-5" />
            <span className="text-xs">Scan</span>
          </Button>
          <Button variant="outline" className="flex flex-col gap-2 h-auto py-4 bg-transparent">
            <Edit3 className="h-5 w-5" />
            <span className="text-xs">Manual</span>
          </Button>
        </div>
      </Card>

      {/* Activity Tracker */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
            <Footprints className="h-6 w-6 text-secondary-foreground" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">Steps Today</p>
            <p className="text-2xl font-bold">
              {steps.toLocaleString()}
              <span className="text-sm text-muted-foreground">/{stepsGoal.toLocaleString()}</span>
            </p>
          </div>
        </div>
        <Progress value={stepsProgress} className="h-2" />
      </Card>

      {/* Weight Progress Mini Graph */}
      <Card className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-success" />
            <p className="font-semibold">Weight Progress</p>
          </div>
          <p className="text-sm text-muted-foreground">7 days</p>
        </div>
        <div className="flex items-end justify-between gap-2 h-24">
          {[72, 71.8, 71.5, 71.7, 71.3, 71.0, 70.8].map((weight, i) => {
            const maxWeight = 72
            const minWeight = 70.5
            const height = ((weight - minWeight) / (maxWeight - minWeight)) * 100
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-primary rounded-t" style={{ height: `${height}%` }} />
                <p className="text-xs text-muted-foreground">{["M", "T", "W", "T", "F", "S", "S"][i]}</p>
              </div>
            )
          })}
        </div>
        <p className="text-sm text-center text-muted-foreground">
          Current: <span className="font-semibold text-foreground">70.8 kg</span>
        </p>
      </Card>

      {/* Motivation Banner */}
      <Card className="bg-gradient-to-r from-primary to-secondary p-6 text-primary-foreground">
        <div className="flex items-center gap-3">
          <Flame className="h-8 w-8" />
          <div>
            <p className="text-lg font-bold">You're {weekProgress}% closer</p>
            <p className="text-sm opacity-90">to your goal this week</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
