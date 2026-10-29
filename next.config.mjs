/** @type {import('next').NextConfig} */
const nextConfig = {
  // Stealth mode: the site is one page. The old multi-page site (brands,
  // fleets, agencies, case studies, contact) is pulled out to
  // /disabled-pages, not deleted — see disabled-pages/README.md. These
  // redirects are temporary (not permanent), so they're cheap to remove
  // if/when those pages come back.
  async redirects() {
    return [
      { source: '/oems', destination: '/', permanent: true },
      { source: '/oem', destination: '/', permanent: true },
      { source: '/platform', destination: '/', permanent: true },
      { source: '/docs', destination: '/', permanent: true },
      { source: '/early-access', destination: '/', permanent: true },
      { source: '/brands', destination: '/', permanent: false },
      { source: '/fleets', destination: '/', permanent: false },
      { source: '/agencies', destination: '/', permanent: false },
      { source: '/contact', destination: '/', permanent: false },
      { source: '/case-studies', destination: '/', permanent: false },
      { source: '/case-studies/:slug', destination: '/', permanent: false },
    ]
  },
}

export default nextConfig
