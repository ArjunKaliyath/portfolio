/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/portfolio',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/portfolio',
  },
};

export default nextConfig;
