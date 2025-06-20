import withPWA from 'next-pwa'

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    offlinePage: '/offline.html',
  },
})

export default {
  ...nextConfig,
  eslint: {
    ignoreDuringBuilds: true,
  },
}
