'use client'

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your Progress 📊
        </h1>
        <p className="text-xl text-gray-600">
          Track your wellness journey and celebrate your achievements
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="text-primary-600 text-3xl mb-2">🎯</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">0</div>
          <div className="text-gray-600">Challenges Completed</div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="text-primary-600 text-3xl mb-2">🍎</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">0</div>
          <div className="text-gray-600">Meals Logged</div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="text-primary-600 text-3xl mb-2">🔥</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">0</div>
          <div className="text-gray-600">Day Streak</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>

        <div className="text-center py-12 text-gray-500">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-lg">No activity yet</p>
          <p className="text-sm">Start logging food and joining challenges to see your progress here!</p>
        </div>
      </div>

      <div className="bg-primary-50 border-l-4 border-primary-600 p-6">
        <h3 className="font-semibold text-primary-900 mb-2">🚀 Getting Started</h3>
        <ul className="space-y-2 text-primary-800">
          <li>• Join a wellness challenge from the Challenges page</li>
          <li>• Log your daily meals to track nutrition</li>
          <li>• Check back here to see your progress over time</li>
        </ul>
      </div>
    </div>
  )
}
