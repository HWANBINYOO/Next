/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRoot: true,
  },
  swcMinify: true,
  images : {
    domains: ["imagedelivery.net","videodelivery.net"],
  },
};

module.exports = nextConfig
