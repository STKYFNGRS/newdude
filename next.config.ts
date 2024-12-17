export default {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ],
    minimumCacheTTL: 60,
    // Add timeouts for image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['cdn.shopify.com']
  },
  // Add general fetch timeout
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  httpAgentOptions: {
    keepAlive: true,
  }
};