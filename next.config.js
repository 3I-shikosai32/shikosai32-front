const removeImports = require('next-remove-imports');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com'],
    dangerouslyAllowSVG: true,
  },
};

module.exports = removeImports()(nextConfig);
