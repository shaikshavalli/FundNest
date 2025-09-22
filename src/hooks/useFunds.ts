import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { Fund } from '../types'

export function useFunds() {
  const [funds, setFunds] = useState<Fund[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFunds()
  }, [])

  const fetchFunds = async () => {
    try {
      const { data, error } = await supabase
        .from('funds')
        .select('*')
        .order('name')

      if (error) throw error
      setFunds(data || [])
    } catch (error) {
      console.error('Error fetching funds:', error)
    } finally {
      setLoading(false)
    }
  }

  return { funds, loading, refetch: fetchFunds }
}