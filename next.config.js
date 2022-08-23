/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  generateBuildId: async () => {
    return new Date().getTime().toString()
  },
}

module.exports = nextConfig
