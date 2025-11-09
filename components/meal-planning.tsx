"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Plus, Sparkles, Copy, Check } from "lucide-react"

export function MealPlanning() {
  const [selectedDay, setSelectedDay] = useState(3)

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const dates = [27, 28, 29, 30, 31, 1, 2]

  const mealPlan = {
    breakfast: { name: "Protein Oatmeal Bowl", calories: 380, protein: 25, carbs: 45, fat: 12 },
    lunch: { name: "Grilled Chicken & Quinoa", calories: 520, protein: 42, carbs: 48, fat: 18 },
    dinner: { name: "Salmon with Vegetables", calories: 450, protein: 38, carbs: 25, fat: 22 },
    snacks: { name: "Greek Yogurt & Almonds", calories: 220, protein: 18, carbs: 15, fat: 10 },
  }

  const aiSuggestions = [
    { name: "High Protein Day", calories: 1850, protein: 150 },
    { name: "Balanced Macro Split", calories: 2000, protein: 120 },
    { name: "Low Carb Focus", calories: 1750, protein: 130 },
  ]

  return (
    <div className="mx-auto max-w-md space-y-6 p-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Meal Plan</h1>
        <p className="text-muted-foreground">Plan your week ahead</p>
      </div>

      {/* Week Navigator */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <p className="font-semibold">Jan 27 - Feb 2</p>
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(index)}
              className={`flex flex-col items-center gap-1 rounded-lg p-2 transition-colors ${
                selectedDay === index ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
            >
              <span className="text-xs font-medium">{day}</span>
              <span className="text-sm">{dates[index]}</span>
            </button>
          ))}
        </div>
      </Card>

      {/* AI Meal Suggestions */}
      <Card className="p-6 space-y-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <p className="font-semibold">AI Meal Suggestions</p>
        </div>
        <div className="space-y-2">
          {aiSuggestions.map((suggestion, index) => (
            <Button key={index} variant="outline" className="w-full justify-between bg-card">
              <div className="text-left">
                <p className="font-medium">{suggestion.name}</p>
                <p className="text-xs text-muted-foreground">
                  {suggestion.calories} cal • {suggestion.protein}g protein
                </p>
              </div>
              <Plus className="h-4 w-4" />
            </Button>
          ))}
        </div>
      </Card>

      {/* Today's Meal Plan */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Thursday's Plan</h2>
          <Button variant="ghost" size="sm">
            <Copy className="mr-2 h-4 w-4" />
            Copy Day
          </Button>
        </div>

        {/* Breakfast */}
        <Card className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-sm text-muted-foreground">Breakfast</p>
              <p className="font-semibold">{mealPlan.breakfast.name}</p>
            </div>
            <Badge variant="secondary">{mealPlan.breakfast.calories} cal</Badge>
          </div>
          <div className="flex gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Protein</p>
              <p className="font-medium">{mealPlan.breakfast.protein}g</p>
            </div>
            <div>
              <p className="text-muted-foreground">Carbs</p>
              <p className="font-medium">{mealPlan.breakfast.carbs}g</p>
            </div>
            <div>
              <p className="text-muted-foreground">Fat</p>
              <p className="font-medium">{mealPlan.breakfast.fat}g</p>
            </div>
          </div>
        </Card>

        {/* Lunch */}
        <Card className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-sm text-muted-foreground">Lunch</p>
              <p className="font-semibold">{mealPlan.lunch.name}</p>
            </div>
            <Badge variant="secondary">{mealPlan.lunch.calories} cal</Badge>
          </div>
          <div className="flex gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Protein</p>
              <p className="font-medium">{mealPlan.lunch.protein}g</p>
            </div>
            <div>
              <p className="text-muted-foreground">Carbs</p>
              <p className="font-medium">{mealPlan.lunch.carbs}g</p>
            </div>
            <div>
              <p className="text-muted-foreground">Fat</p>
              <p className="font-medium">{mealPlan.lunch.fat}g</p>
            </div>
          </div>
        </Card>

        {/* Dinner */}
        <Card className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-sm text-muted-foreground">Dinner</p>
              <p className="font-semibold">{mealPlan.dinner.name}</p>
            </div>
            <Badge variant="secondary">{mealPlan.dinner.calories} cal</Badge>
          </div>
          <div className="flex gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Protein</p>
              <p className="font-medium">{mealPlan.dinner.protein}g</p>
            </div>
            <div>
              <p className="text-muted-foreground">Carbs</p>
              <p className="font-medium">{mealPlan.dinner.carbs}g</p>
            </div>
            <div>
              <p className="text-muted-foreground">Fat</p>
              <p className="font-medium">{mealPlan.dinner.fat}g</p>
            </div>
          </div>
        </Card>

        {/* Snacks */}
        <Card className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-sm text-muted-foreground">Snacks</p>
              <p className="font-semibold">{mealPlan.snacks.name}</p>
            </div>
            <Badge variant="secondary">{mealPlan.snacks.calories} cal</Badge>
          </div>
          <div className="flex gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Protein</p>
              <p className="font-medium">{mealPlan.snacks.protein}g</p>
            </div>
            <div>
              <p className="text-muted-foreground">Carbs</p>
              <p className="font-medium">{mealPlan.snacks.carbs}g</p>
            </div>
            <div>
              <p className="text-muted-foreground">Fat</p>
              <p className="font-medium">{mealPlan.snacks.fat}g</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Daily Summary */}
      <Card className="p-6 bg-muted/50">
        <div className="flex items-center justify-between mb-4">
          <p className="font-semibold">Daily Total</p>
          <Check className="h-5 w-5 text-success" />
        </div>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">1,570</p>
            <p className="text-xs text-muted-foreground">Calories</p>
          </div>
          <div>
            <p className="text-2xl font-bold">123</p>
            <p className="text-xs text-muted-foreground">Protein</p>
          </div>
          <div>
            <p className="text-2xl font-bold">133</p>
            <p className="text-xs text-muted-foreground">Carbs</p>
          </div>
          <div>
            <p className="text-2xl font-bold">62</p>
            <p className="text-xs text-muted-foreground">Fat</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
