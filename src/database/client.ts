
import { createClient } from '@supabase/supabase-js'

console.log(import.meta.env)

const supabaseUrl = import.meta.env.SUPA_URL as string
const supabaseKey = import.meta.env.SUPA_KEY as string
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase