/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — required for GitHub Pages (no Node server).
  output: 'export',
  // Next's image optimizer needs a server; GitHub Pages has none.
  images: { unoptimized: true },
  // Emits /about/index.html instead of /about.html so URLs work on Pages.
  trailingSlash: true,
};
export default nextConfig;
