'use client';

export interface HijriMonth {
  number: number;
  nameFr: string;
  nameAr: string;
}

export const HIJRI_MONTHS: HijriMonth[] = [
  { number: 1, nameFr: "Mouharram", nameAr: "المحرم" },
  { number: 2, nameFr: "Safar", nameAr: "صفر" },
  { number: 3, nameFr: "Rabi' al-awwal", nameAr: "ربيع الأول" },
  { number: 4, nameFr: "Rabi' ath-thani", nameAr: "ربيع الثاني" },
  { number: 5, nameFr: "Joumada al-oula", nameAr: "جمادى الأولى" },
  { number: 6, nameFr: "Joumada al-akhira", nameAr: "جمادى الآخرة" },
  { number: 7, nameFr: "Rajab", nameAr: "رجب" },
  { number: 8, nameFr: "Cha'ban", nameAr: "شعبان" },
  { number: 9, nameFr: "Ramadan", nameAr: "رمضان" },
  { number: 10, nameFr: "Chawwal", nameAr: "شوال" },
  { number: 11, nameFr: "Dhou al-qi'da", nameAr: "ذو القعدة" },
  { number: 12, nameFr: "Dhou al-hijja", nameAr: "ذو الحجة" },
];

export interface HijriDateInfo {
  day: number;
  month: number;
  monthFr: string;
  monthAr: string;
  year: number;
  formattedFr: string;
  formattedAr: string;
}

export function calculateHijriDate(offsetDays: number = 0): HijriDateInfo {
  const date = new Date();
  if (offsetDays !== 0) {
    date.setDate(date.getDate() + offsetDays);
  }

  try {
    const formatter = new Intl.DateTimeFormat('en-US-u-ca-islamic-umalqura-nu-latn', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    });

    const parts = formatter.formatToParts(date);
    const day = parseInt(parts.find(p => p.type === 'day')?.value || '1', 10);
    const month = parseInt(parts.find(p => p.type === 'month')?.value || '1', 10);
    const year = parseInt(parts.find(p => p.type === 'year')?.value || '1447', 10);

    const monthInfo = HIJRI_MONTHS.find(m => m.number === month) || HIJRI_MONTHS[0];

    const formattedFr = `${day} ${monthInfo.nameFr} ${year} AH`;
    const formattedAr = `${day} ${monthInfo.nameAr} ${year}`;

    return {
      day,
      month,
      monthFr: monthInfo.nameFr,
      monthAr: monthInfo.nameAr,
      year,
      formattedFr,
      formattedAr
    };
  } catch (error) {
    console.error("Error calculating Hijri date with Intl:", error);
    // Safe fallback
    return {
      day: 1,
      month: 1,
      monthFr: HIJRI_MONTHS[0].nameFr,
      monthAr: HIJRI_MONTHS[0].nameAr,
      year: 1448,
      formattedFr: "1 Mouharram 1448 AH",
      formattedAr: "1 المحرم 1448"
    };
  }
}
