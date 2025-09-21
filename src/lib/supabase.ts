import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Booking {
  id?: string
  name: string
  email: string
  phone: string
  place: string
  check_in: string
  check_out?: string
  type: 'hotel' | 'restaurant' | 'transport'
  created_at?: string
}

export interface Alert {
  id: string
  title: string
  description: string
  type: 'weather' | 'landslide' | 'traffic' | 'emergency'
  severity: 'low' | 'medium' | 'high'
  location: string
  coordinates?: [number, number]
  created_at: string
  active: boolean
}