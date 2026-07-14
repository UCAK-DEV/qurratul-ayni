import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Qurratul Ayni',
    short_name: 'Qurratul',
    description: 'Enseignements de Serigne Shouhaïbou Mbacké',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b1710',
    theme_color: '#0b1710',
    icons: [
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}