/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      'files.stripe.com'
    ]
  }
}

module.exports = {
  newNextLinkBehavior: true,
  images: {
    unoptimized: true,
  },
}



module.exports = nextConfig
