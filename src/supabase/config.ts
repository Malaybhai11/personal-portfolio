import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://veibdedymkpkyhsdebpf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlaWJkZWR5bWtwa3loc2RlYnBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4MTk4MzIsImV4cCI6MjA1NjM5NTgzMn0.dQ9eZ4xAJq5_1kxhPwuRO_8xO5gO93HT2CTJLIWUTGw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)