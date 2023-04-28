/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.graemepirie.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
