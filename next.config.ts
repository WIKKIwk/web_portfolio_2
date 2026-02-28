import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/web_portfolio_2",
  assetPrefix: "/web_portfolio_2",
  images: {
    unoptimized: true, // GitHub Pages static export uchun kerak
  },
};

export default nextConfig;
