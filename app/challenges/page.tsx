'use client'

import { useEffect, useState } from 'react'
import { supabase, Challenge } from '@/lib/supabase'

export default function ChallengesPage() {
  const [challenges, setChallenges] = useState<Challenge[]>([])
  const [loading, setLoading] = useState(true)
  const [enrolling, setEnrolling] = useState<string | null>(null)

  useEffect(() => {
    fetchChallenges()
  }, [])

  async function fetchChallenges() {
    try {
      const { data, error } = await supabase
        .from('challenges')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false })

      if (error) throw error
      setChallenges(data || [])
    } catch (error) {
      console.error('Error fetching challenges:', error)
    } finally {
      setLoading(false)
    }
  }

  async function enrollInChallenge(challengeId: string) {
    setEnrolling(challengeId)
    try {
      // Note: This requires authentication - placeholder for now
      alert('Authentication required. Please implement Supabase Auth to enroll!')
    } catch (error) {
      console.error('Error enrolling:', error)
    } finally {
      setEnrolling(null)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-xl text-gray-600">Loading challenges...</div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Wellness Challenges 🎯
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join our challenges to build healthy habits and achieve your wellness goals!
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6">
              <div className="text-white text-sm font-semibold uppercase tracking-wide mb-2">
                {challenge.challenge_type}
              </div>
              <h3 className="text-white text-2xl font-bold">{challenge.title}</h3>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-gray-600">{challenge.description}</p>

              <div className="flex items-center gap-2 text-gray-700">
                <span className="font-semibold">Goal:</span>
                <span>
                  {challenge.target_value} {challenge.target_unit}
                </span>
              </div>

              <div className="text-sm text-gray-500">
                <div>Start: {new Date(challenge.start_date).toLocaleDateString()}</div>
                <div>End: {new Date(challenge.end_date).toLocaleDateString()}</div>
              </div>

              <button
                onClick={() => enrollInChallenge(challenge.id)}
                disabled={enrolling === challenge.id}
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition disabled:opacity-50"
              >
                {enrolling === challenge.id ? 'Enrolling...' : 'Join Challenge'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {challenges.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No active challenges at the moment. Check back soon!
        </div>
      )}
    </div>
  )
}
