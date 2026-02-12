import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient | undefined;

export const getSupabaseClient = () => {
  if (supabase) {
    return supabase;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  console.log("Supabase URL from env:", supabaseUrl);
  console.log("Supabase Anon Key from env:", supabaseAnonKey);

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL and Anon Key are required!');
  }

  supabase = createClient(supabaseUrl, supabaseAnonKey);
  return supabase;
};
