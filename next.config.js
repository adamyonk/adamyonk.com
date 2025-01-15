/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      treeShaking: true
    },
  },
  serverExternalPackages: ['vscode-oniguruma'],
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
