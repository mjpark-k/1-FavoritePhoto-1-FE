/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://one-favoritephoto-1-be.onrender.com/:path*",
      },
    ];
  },
};

export default nextConfig;
