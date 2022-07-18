/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["devlog-s3-bucket.s3.ap-northeast-2.amazonaws.com"],
  },
  format: ["image/png", "images/webp", "image/jpeg"],
};

module.exports = nextConfig;
