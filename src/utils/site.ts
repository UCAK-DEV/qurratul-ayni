/**
 * Configuration centrale du site — utilisée par les métadonnées,
 * le sitemap, les robots et les données structurées (JSON-LD).
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://qurratulayni.com';

export const SITE_NAME = 'Qurratul Ayni';
export const SITE_TITLE = 'Qurratul Ayni — قرة العين';

export const SITE_DESCRIPTION =
  'Bibliothèque spirituelle digitale des enseignements de Serigne Shouhaïbou Mbacké : jurisprudence islamique (fiqh), prières, wirds et nafilas quotidiennes, avec audiothèque intégrée.';

export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const DEVELOPERS = [
  {
    name: 'Makhtar Wade',
    alias: 'almuxtaardev',
    url: 'https://almuxtaardev.vercel.app',
    role: 'Cofondateur & Développeur Full-Stack',
  },
  {
    name: 'Pape Makhtar Aidara',
    alias: 'PMA',
    url: 'https://pma-portfolio.vercel.app',
    role: 'Cofondateur & Développeur Full-Stack',
  },
] as const;
