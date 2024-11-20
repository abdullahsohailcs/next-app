import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental', // Enable the partial prerendering feature
  },
};

export default nextConfig;
