import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "www.laroche-posay.us",
        pathname: "/dw/image/**",
      },
    ],
  },
};

export default nextConfig;
