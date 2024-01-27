/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    
    async redirects() {
      return [
        {
          source: '/',
          destination: '/customers',
          permanent: true,
        },
      ];
    },
};

export default nextConfig;
