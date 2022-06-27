/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3.ap-northeast-2.amazonaws.com"],
  },
  env: {
    EXP: process.env.EXP,
    // 원하는 환경변수 여러개 추가 가능.
  },
};

module.exports = nextConfig;
