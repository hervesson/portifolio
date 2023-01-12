/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
