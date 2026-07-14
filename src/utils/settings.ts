'use client';

import { getSupabaseClient } from './supabase';

const getSafeSupabase = () => {
  try {
    return getSupabaseClient();
  } catch {
    return null;
  }
};

// Track keys that already failed in Supabase (e.g. table not found, 404).
// Avoids hammering the API with repeated failed requests in the same session.
const failedKeys = new Set<string>();

// Dedupe concurrent fetches for the same key (Navbar + page can ask together).
const inflight = new Map<string, Promise<string | null>>();

const fetchSetting = (key: string): Promise<string | null> => {
  if (failedKeys.has(key)) return Promise.resolve(null);

  const pending = inflight.get(key);
  if (pending) return pending;

  const supabase = getSafeSupabase();
  if (!supabase) return Promise.resolve(null);

  const request = (async () => {
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

      // Mark as failed so we don't retry (covers 404, missing table, etc.)
      failedKeys.add(key);
    } catch (e) {
      console.warn(`Failed to fetch setting ${key} from Supabase, falling back to default/cache.`, e);
      failedKeys.add(key);
    }
    return null;
  })().finally(() => inflight.delete(key));

  inflight.set(key, request);
  return request;
};

export async function getSetting(key: string, defaultValue: string): Promise<string> {
  // Serve the localStorage cache instantly, but revalidate in the background
  // so admin changes (e.g. hijri_offset) reach returning visitors on next load.
  if (typeof window !== 'undefined') {
    const cached = localStorage.getItem(`setting_${key}`);
    if (cached !== null) {
      void fetchSetting(key);
      return cached;
    }
  }

  const fresh = await fetchSetting(key);
  return fresh ?? defaultValue;
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
