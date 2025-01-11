/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      treeShaking: true
    }
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
