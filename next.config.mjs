/** @type {import('next').NextConfig} */
import fs from "fs";

const nextConfig = {
  reactStrictMode: true,

  devServer: {
    https: {
      key: fs.readFileSync("C:/Users/SnowRang/Downloads/localhost+2-key.pem"),
      cert: fs.readFileSync("C:/Users/SnowRang/Downloads/localhost+2.pem"),
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
