/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.forgeautomotive.media',
      },
    ],
  },
};

module.exports = nextConfig;
