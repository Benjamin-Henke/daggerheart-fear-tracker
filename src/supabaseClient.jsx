import { createClient } from '@supabase/supabase-js'

// TODO
// make .env
// bring in variables
const supabaseUrl = 'https://jcqpyzuhxosinofsdkae.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjcXB5enVoeG9zaW5vZnNka2FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5OTcyMDgsImV4cCI6MjA2OTU3MzIwOH0.z4NY_CjcWiguWpy7h4MscuYMHOkZ8MhQ2saEYBbI8rg'

export const supabase = createClient(supabaseUrl, supabaseKey)
