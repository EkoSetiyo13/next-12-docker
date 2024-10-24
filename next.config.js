/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    outputStandalone: true,
  }
  webpack: (config) => {
    return config
  }
}

module.exports = nextConfig
