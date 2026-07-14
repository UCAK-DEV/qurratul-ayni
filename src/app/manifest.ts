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
    scope: '/',
    id: '/',
    icons: [
      {
        src: '/favicon.png',
        sizes: '48x48',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/mosque-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/mosque-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/mosque-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/mosque-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}