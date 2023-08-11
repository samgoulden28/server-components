/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['upload.wikimedia.org', 'encrypted-tbn0.gstatic.com'],
  },
  experimental: {
    serverActions: true,
  }
}

module.exports = nextConfig
