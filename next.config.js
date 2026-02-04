import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(process.cwd(), 'src');
    return config;
  },
};

export default nextConfig;
