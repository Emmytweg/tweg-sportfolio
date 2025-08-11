// Remove TypeScript types and use CommonJS export

const { SiIgn } = require("react-icons/si");

const nextConfig = {
  /* config options here */
  eslint:{
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;
