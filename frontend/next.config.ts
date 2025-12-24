import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        pathname: "**",
      },
    ],
    localPatterns: [
      {
        pathname: "/assets/img/**",
      },
    ],
  },
};

export default nextConfig;
