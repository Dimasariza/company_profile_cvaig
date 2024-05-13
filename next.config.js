// const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.extensionAlias = {
        ".js": [".js", ".ts"],
        ".jsx": [".jsx", ".tsx"],
    };
    return config;
  },
  env: {
    PUBLIC_URL: process.env.PUBLIC_URL,
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

module.exports =  nextConfig;
