/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['infura-ipfs.io', 'wasabi.infura-ipfs.io', 'ipfs.io']
  },
  domains: ['infura-ipfs.io', 'th.bing.com', 'wasabi.infura-ipfs.io', 'ipfs.io']
}

module.exports = nextConfig
