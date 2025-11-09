import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types
export interface Challenge {
  id: string
  title: string
  description: string
  challenge_type: 'daily' | 'weekly' | 'monthly' | 'custom'
  target_value: number
  target_unit: string
  start_date: string
  end_date: string
  is_active: boolean
  created_at: string
}

export interface FoodLog {
  id: string
  user_id: string
  food_name: string
  calories: number
  protein: number
  carbs: number
  fats: number
  meal_type: 'breakfast' | 'lunch' | 'dinner' | 'snack'
  logged_at: string
  notes?: string
  created_at: string
}

export interface UserProgress {
  id: string
  user_id: string
  challenge_id: string
  progress_value: number
  progress_date: string
  notes?: string
  created_at: string
}
