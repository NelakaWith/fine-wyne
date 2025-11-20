import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  transpilePackages: ["@fine-wyne/ui", "@fine-wyne/theme"],
};

export default nextConfig;
