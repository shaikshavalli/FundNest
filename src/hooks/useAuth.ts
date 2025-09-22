import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { User } from '../types'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [userType, setUserType] = useState<'investor' | 'student' | 'startup' | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user as User)
        // In a real app, you'd fetch user type from database
        // For now, we'll store it in localStorage
        const storedUserType = localStorage.getItem('userType') as 'investor' | 'student' | 'startup'
        setUserType(storedUserType)
      }
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          setUser(session.user as User)
          const storedUserType = localStorage.getItem('userType') as 'investor' | 'student' | 'startup'
          setUserType(storedUserType)
        } else {
          setUser(null)
          setUserType(null)
          localStorage.removeItem('userType')
        }
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string, type: 'investor' | 'student' | 'startup') => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (!error) {
      localStorage.setItem('userType', type)
      setUserType(type)
    }
    
    return { error }
  }

  const signUp = async (email: string, password: string, type: 'investor' | 'student' | 'startup') => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })
    
    if (!error) {
      localStorage.setItem('userType', type)
      setUserType(type)
    }
    
    return { error }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (!error) {
      localStorage.removeItem('userType')
      setUserType(null)
    }
    return { error }
  }

  return {
    user,
    userType,
    loading,
    signIn,
    signUp,
    signOut,
  }
}