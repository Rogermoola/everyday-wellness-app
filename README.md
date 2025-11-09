# Everyday Wellness App

A comprehensive wellness tracking application with food logging, challenges, and progress monitoring built with Next.js, Supabase, and Vercel.

## 🌟 Features

- **Food Logging**: Track meals with detailed nutrition information (calories, protein, carbs, fats)
- **Wellness Challenges**: Participate in daily, weekly, and monthly wellness challenges
- **Progress Tracking**: Monitor your progress across different challenges
- **User Profiles**: Manage your personal wellness profile
- **Real-time Updates**: Powered by Supabase real-time subscriptions

## 🏗️ Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Backend**: Supabase (PostgreSQL + Auth + Edge Functions)
- **Deployment**: Vercel
- **Styling**: Tailwind CSS (v0.dev design system)

## 📦 Database Schema

### Tables

1. **users** - User profiles linked to Supabase Auth
2. **food_logs** - Food logging entries with nutrition data
3. **challenges** - Available wellness challenges
4. **user_challenge_enrollments** - User enrollments in challenges
5. **user_progress** - Daily progress tracking for challenges

## 🚀 API Endpoints

### Supabase Edge Functions

- `POST /food-logs` - Create a new food log entry
- `GET /food-logs` - Get user's food logs
- `GET /challenges` - List all active challenges
- `POST /challenge-enroll` - Enroll in a challenge
- `GET /user-progress` - Get user's progress data
- `POST /user-progress` - Update progress

## 🔧 Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or bun
- Supabase account
- Vercel account

### Environment Variables

The following environment variables are already configured in Vercel:

```env
NEXT_PUBLIC_SUPABASE_URL=https://aieueqvxluvedjgewvzv.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
```

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Rogermoola/everyday-wellness-app.git
cd everyday-wellness-app
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Create a `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=https://aieueqvxluvedjgewvzv.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
```

4. Run the development server:
```bash
npm run dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 📱 Usage Examples

### Creating a Food Log

```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const { data, error } = await supabase
  .from('food_logs')
  .insert({
    food_name: 'Grilled Chicken Salad',
    calories: 350,
    protein: 35,
    carbs: 15,
    fats: 18,
    meal_type: 'lunch'
  })
```

### Getting Challenges

```typescript
const { data: challenges } = await supabase
  .from('challenges')
  .select('*')
  .eq('is_active', true)
```

### Enrolling in a Challenge

```typescript
const { data } = await supabase
  .from('user_challenge_enrollments')
  .insert({
    challenge_id: '<challenge-id>'
  })
```

## 🎯 Sample Challenges

Your backend comes pre-loaded with 5 sample challenges:

1. **30-Day Water Challenge** - Drink 8 glasses daily
2. **Weekly Step Goal** - Walk 10,000 steps daily
3. **Healthy Eating Month** - Log 3 healthy meals daily
4. **Daily Meditation** - Meditate 10 minutes daily
5. **Protein Power Week** - Consume 100g+ protein daily

## 🔒 Security

- Row Level Security (RLS) policies enabled on all tables
- Users can only access their own data
- Supabase Auth integration for secure authentication
- Encrypted API keys in Vercel

## 🚢 Deployment

This app is automatically deployed to Vercel:

**Production URL**: [https://v0-everyday-wellness-app.vercel.app](https://v0-everyday-wellness-app.vercel.app)

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Rogermoola/everyday-wellness-app)

## 📊 Supabase Project

- **Project**: everyday-wellness-backend
- **Region**: us-east-1
- **Dashboard**: [https://supabase.com/dashboard/project/aieueqvxluvedjgewvzv](https://supabase.com/dashboard/project/aieueqvxluvedjgewvzv)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License

## 🙏 Acknowledgments

- Built with [v0.dev](https://v0.dev) by Vercel
- Backend powered by [Supabase](https://supabase.com)
- Deployed on [Vercel](https://vercel.com)

---

**Need help?** Open an issue or reach out!
