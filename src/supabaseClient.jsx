import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.SUPABASEURL
const supabaseKey = import.meta.env.SUPABASEKEY

export const supabase = createClient(supabaseUrl, supabaseKey)
