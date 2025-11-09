import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to Everyday Wellness 🌱
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your comprehensive platform for tracking nutrition, joining wellness challenges, 
          and monitoring your health journey.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/challenges"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            View Challenges
          </Link>
          <Link 
            href="/food-log"
            className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
          >
            Log Food
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-4xl mb-4">🍎</div>
          <h3 className="text-xl font-bold mb-2">Food Logging</h3>
          <p className="text-gray-600">
            Track your meals with detailed nutrition information including calories, protein, carbs, and fats.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-bold mb-2">Wellness Challenges</h3>
          <p className="text-gray-600">
            Join daily, weekly, and monthly challenges to build healthy habits and stay motivated.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
          <p className="text-gray-600">
            Monitor your progress over time and celebrate your achievements on your wellness journey.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl p-12">
        <h2 className="text-3xl font-bold text-center mb-8">Your Wellness Dashboard</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">5</div>
            <div className="text-primary-100">Active Challenges</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">0</div>
            <div className="text-primary-100">Food Logs</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">0</div>
            <div className="text-primary-100">Days Streak</div>
          </div>
        </div>
      </section>
    </div>
  )
}
