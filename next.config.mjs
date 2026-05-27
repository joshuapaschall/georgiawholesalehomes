/** @type {import('next').NextConfig} */
const apiBase = process.env.NEXT_PUBLIC_LISTHIT_API_URL || 'https://app.listhit.io';
const apiHost = new URL(apiBase).hostname;

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: apiHost },
      { protocol: 'https', hostname: 'supabase.co' },
      { protocol: 'https', hostname: '**.supabase.co' },
      { protocol: 'https', hostname: '**.supabase.in' },
      { protocol: 'https', hostname: '**.listhit.io' },
    ],
  },
};

export default nextConfig;
