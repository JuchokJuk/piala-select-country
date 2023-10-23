const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"]
    });
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "/src/styles")],
    prependData: "@import 'index.scss';"
  }
}

module.exports = nextConfig
