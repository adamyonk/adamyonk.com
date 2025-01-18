import withBundleAnalyzer from '@next/bundle-analyzer'
import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      treeShaking: true
    },
  },
  outputFileTracingExcludes: {
    '/': ['.git', '.next/cache'],
    '/feed.xml': ['.git', '.next/cache'],
    '/feed.json': ['.git', '.next/cache'],
    '/\[slug\]': ['.git', '.next/cache'],
    '/posts/\[slug\]': ['.git', '.next/cache'],
    '/posts/tagged/\[slug\]': ['.git', '.next/cache'],
  },
  serverExternalPackages: [
    'vscode-oniguruma',
  ],
}

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig)
