/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/tenohira_v3' : '',
  assetPrefix: isProd ? '/tenohira_v3' : '',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/tenohira_v3' : '',
  },
};

export default nextConfig;
