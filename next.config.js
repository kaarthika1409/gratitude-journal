const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: false
});

const nextConfig = {};

module.exports = withPWA(nextConfig);
