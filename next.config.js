/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['r.testifier.nl', 'newsifier.imgix.net'],
    formats: ['image/avif', 'image/webp'],
  },
};
