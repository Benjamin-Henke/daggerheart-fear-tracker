import { createClient } from '@supabase/supabase-js'

// TODO
// Make new project in supabase
// make .env
// bring in variables
const supabaseUrl = 'supabase_url'
const supabaseKey = 'supabase_anon_key'

export const supabase = createClient(supabaseUrl, supabaseKey)
