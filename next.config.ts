import withBundleAnalyzer from '@next/bundle-analyzer'
import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      treeShaking: true
    },
  },
  outputFileTracingExcludes: {
    '/feed.xml': ['.git', '.next/cache'],
  },
  serverExternalPackages: [
    'vscode-oniguruma',
  ],
}

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig)
