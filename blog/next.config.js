/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "s3.console.aws.amazon.com",
      "s3.console.aws.amazon.com/s3/buckets/devlog-s3-bucke",
      "s3.console.aws.amazon.com/s3/buckets/devlogfront",
    ],
  },
};

module.exports = nextConfig;
