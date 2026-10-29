/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  experimental: {
    agentUpgrade: 'security',
  },
}

export default nextConfig
