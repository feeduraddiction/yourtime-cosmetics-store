/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.avril-organic.com', 'https://www.shopify.com/'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
