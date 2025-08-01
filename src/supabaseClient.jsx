import { createClient } from '@supabase/supabase-js'

// TODO
// make .env
// bring in variables
const supabaseUrl = 'https://crnttgodenjbjtfqqgtq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNybnR0Z29kZW5qYmp0ZnFxZ3RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwNzczMTAsImV4cCI6MjA2OTY1MzMxMH0.Ts6ndVPVTZLtW35hcQMKZvrHrtOmIpHy316cdxtlbGo'

export const supabase = createClient(supabaseUrl, supabaseKey)
