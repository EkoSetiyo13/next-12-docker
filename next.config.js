/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  reactStrictMode: true,
  staticPageGenerationTimeout: 1000,
  output: "standalone",
  env: {
    API_URL: process.env.API_URL,
    BASE_URL: process.env.BASE_URL,
    APP_ENV: process.env.APP_ENV,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    BASE_URL: process.env.BASE_URL,
    APP_ENV: process.env.APP_ENV,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  webpack: (config) => {
    return config
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
