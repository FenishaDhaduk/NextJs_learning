/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  env: {
    API_ENDPOINT: "http://localhost:3001/api/",
  },
};

module.exports = nextConfig;
