/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable optimization for production
  swcMinify: true,
  // Image optimization
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
