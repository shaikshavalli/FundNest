import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { Portfolio } from '../types'

export function usePortfolio(userId: string | undefined) {
  const [portfolio, setPortfolio] = useState<Portfolio[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (userId) {
      fetchPortfolio()
    }
  }, [userId])

  const fetchPortfolio = async () => {
    if (!userId) return

    try {
      const { data, error } = await supabase
        .from('portfolio')
        .select(`
          *,
          fund:funds(*)
        `)
        .eq('user_id', userId)

      if (error) throw error
      setPortfolio(data || [])
    } catch (error) {
      console.error('Error fetching portfolio:', error)
    } finally {
      setLoading(false)
    }
  }

  return { portfolio, loading, refetch: fetchPortfolio }
}