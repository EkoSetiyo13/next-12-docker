/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  reactStrictMode: true,
  staticPageGenerationTimeout: 1000,
  env: {
    API_URL: process.env.API_URL,
    BASE_URL: process.env.BASE_URL,
    APP_ENV: process.env.APP_ENV
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    BASE_URL: process.env.BASE_URL,
    APP_ENV: process.env.APP_ENV
  },
  webpack: (config) => {
    return config
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
