/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    domains: ['r.testifier.nl'],
    formats: ['image/avif', 'image/webp'],
  },
};
