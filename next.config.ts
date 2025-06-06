import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
        protocol: "https",
        port: "",
      },
      {
        hostname: "gkinmiptnv.ufs.sh",
        protocol: "https",
        port: "",
      },
    ]
  }
};

export default nextConfig;
