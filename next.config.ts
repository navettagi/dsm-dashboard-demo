import { NextConfig } from 'next';

const config: NextConfig = {
  eslint: {
    // Ignora i warning ESLint durante il build su Vercel
    ignoreDuringBuilds: true,
  },
}

export default config;