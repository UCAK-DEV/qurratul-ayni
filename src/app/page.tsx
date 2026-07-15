import React from 'react';
import Link from 'next/link';
import { fetchChapters } from '@/utils/supabase';
import { calculateHijriDate } from '@/utils/hijri';
import { getSetting } from '@/utils/settings';
import { getRecommendationForDate } from '@/data/nafilas';
import Icon from '@/components/Icon';
import HomeUI from '@/components/HomeUI';

export const revalidate = 3600;

export default async function LibraryPage() {
  const [chapters, offsetStr] = await Promise.all([
    fetchChapters(),
    getSetting('hijri_offset', '0'),
  ]);

  if (chapters.length === 0) {
    return (
      <div className="min-h-screen text-white flex flex-col items-center justify-center p-6 text-center" style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)' }}>
        <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20">
          <Icon name="cloud_off" className="text-4xl text-red-500" />
        </div>
        <h1 className="text-3xl font-black mb-4 uppercase tracking-tighter">Données Inaccessibles</h1>
        <p className="text-white/60 mb-8 max-w-md font-reading">
          Aucune donnée trouvée. Vérifiez votre connexion ou la configuration de vos clés Supabase sur Vercel.
        </p>
        <Link href="/" className="px-8 py-3 bg-gold text-[#241c07] rounded-full text-xs font-black uppercase hover:scale-105 transition-all shadow-lg shadow-gold/20">
          Réessayer
        </Link>
      </div>
    );
  }

  const offset = parseInt(offsetStr, 10);
  const currentHijri = calculateHijriDate(offset);
  const dayOfWeek = new Date().getDay();
  const recommendations = getRecommendationForDate(currentHijri.day, currentHijri.month, dayOfWeek);
  const selectedNafila = recommendations.length > 0 ? recommendations[0] : null;

  return (
    <HomeUI chapters={chapters} selectedNafila={selectedNafila} hijriFormatted={currentHijri.formattedFr} />
  );
}
