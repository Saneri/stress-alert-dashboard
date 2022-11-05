/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BOT_URL: 'https://stress-alert.ew.r.appspot.com'
  }
}

module.exports = nextConfig
