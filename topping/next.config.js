/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `https://openapi.naver.com/:path*`,
      },
    ];
  },
}

module.exports = nextConfig
