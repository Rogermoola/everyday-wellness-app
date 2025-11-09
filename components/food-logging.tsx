"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Scan, Search, Plus, Clock, Flame, Apple } from "lucide-react"

export function FoodLogging() {
  const [selectedMeal, setSelectedMeal] = useState("breakfast")

  const recentFoods = [
    { name: "Oatmeal with Berries", calories: 320, time: "Yesterday" },
    { name: "Grilled Chicken Salad", calories: 450, time: "2 days ago" },
    { name: "Greek Yogurt", calories: 150, time: "3 days ago" },
  ]

  const quickAdd = [
    { name: "Banana", calories: 105, icon: Apple },
    { name: "Protein Shake", calories: 180, icon: Flame },
    { name: "Coffee", calories: 5, icon: Clock },
  ]

  return (
    <div className="mx-auto max-w-md space-y-6 p-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Log Food</h1>
        <p className="text-muted-foreground">Track your meals and nutrition</p>
      </div>

      {/* Meal Type Selector */}
      <Tabs value={selectedMeal} onValueChange={setSelectedMeal} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
          <TabsTrigger value="lunch">Lunch</TabsTrigger>
          <TabsTrigger value="dinner">Dinner</TabsTrigger>
          <TabsTrigger value="snacks">Snacks</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* AI Photo Scan */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Camera className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <p className="font-semibold">AI Photo Scan</p>
            <p className="text-sm text-muted-foreground">Snap a photo to log instantly</p>
          </div>
        </div>
        <Button className="w-full" size="lg">
          <Camera className="mr-2 h-5 w-5" />
          Take Photo
        </Button>
      </Card>

      {/* Barcode Scanner */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
            <Scan className="h-6 w-6 text-secondary" />
          </div>
          <div className="flex-1">
            <p className="font-semibold">Barcode Scanner</p>
            <p className="text-sm text-muted-foreground">Scan packaged foods</p>
          </div>
        </div>
        <Button variant="outline" className="w-full bg-transparent" size="lg">
          <Scan className="mr-2 h-5 w-5" />
          Scan Barcode
        </Button>
      </Card>

      {/* Search Food Database */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search foods..." className="pl-10" />
        </div>
      </Card>

      {/* Quick Add */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Quick Add</h2>
        <div className="grid grid-cols-3 gap-3">
          {quickAdd.map((food) => {
            const Icon = food.icon
            return (
              <Button key={food.name} variant="outline" className="flex flex-col gap-2 h-auto py-4 bg-transparent">
                <Icon className="h-5 w-5" />
                <span className="text-xs text-center leading-tight">{food.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {food.calories} cal
                </Badge>
              </Button>
            )
          })}
        </div>
      </div>

      {/* Recent Foods */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Recent Foods</h2>
        <div className="space-y-2">
          {recentFoods.map((food, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium">{food.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {food.calories} cal
                    </Badge>
                    <span className="text-xs text-muted-foreground">{food.time}</span>
                  </div>
                </div>
                <Button size="icon" variant="ghost">
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Today's Summary */}
      <Card className="p-6 bg-muted/50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Today's Total</p>
            <p className="text-2xl font-bold">1,450 cal</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Remaining</p>
            <p className="text-2xl font-bold text-primary">550 cal</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
