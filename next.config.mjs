/** @type {import('next').NextConfig} */
const nextConfig = {
  // The redesign keeps a 3-page site (/, /brands, /fleets); every legacy path
  // from the old site 301s to its nearest equivalent.
  async redirects() {
    return [
      { source: '/oems', destination: '/fleets', permanent: true },
      { source: '/oem', destination: '/fleets', permanent: true },
      { source: '/platform', destination: '/', permanent: true },
      { source: '/docs', destination: '/', permanent: true },
      { source: '/contact', destination: '/', permanent: true },
      { source: '/early-access', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig
