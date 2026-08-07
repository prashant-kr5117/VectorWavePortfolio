import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/team",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
