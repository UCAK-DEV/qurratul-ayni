'use client';

import { getSupabaseClient } from './supabase';

const getSafeSupabase = () => {
  try {
    return getSupabaseClient();
  } catch (e) {
    return null;
  }
};

export async function getSetting(key: string, defaultValue: string): Promise<string> {
  // Check localStorage first for instant client-side read
  if (typeof window !== 'undefined') {
    const cached = localStorage.getItem(`setting_${key}`);
    if (cached !== null) return cached;
  }

  const supabase = getSafeSupabase();
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('settings')
        .select('value')
        .eq('key', key)
        .single();

      if (data && !error) {
        if (typeof window !== 'undefined') {
          localStorage.setItem(`setting_${key}`, data.value);
        }
        return data.value;
      }
    } catch (e) {
      console.warn(`Failed to fetch setting ${key} from Supabase, falling back to default/cache.`, e);
    }
  }

  return defaultValue;
}

export async function setSetting(key: string, value: string): Promise<boolean> {
  if (typeof window !== 'undefined') {
    localStorage.setItem(`setting_${key}`, value);
  }

  const supabase = getSafeSupabase();
  if (supabase) {
    try {
      const { error } = await supabase
        .from('settings')
        .upsert({ key, value }, { onConflict: 'key' });

      if (!error) return true;
      console.error(`Supabase error saving setting ${key}:`, error);
    } catch (e) {
      console.warn(`Failed to save setting ${key} to Supabase, saved locally.`, e);
    }
  }

  return false;
}
