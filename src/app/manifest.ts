import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Qurratul Ayni',
    short_name: 'Qurratul',
    description: 'Enseignements de Serigne Shouhaïbou Mbacké',
    start_url: '/',
    display: 'standalone',
    background_color: '#020504',
    theme_color: '#c9a961',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}