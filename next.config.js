/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      { source: "/about", destination: "/", permanent: false },
      { source: "/admin", destination: "/", permanent: false },
      // { source: "/users/:userid", destination: "/", permanent: true },
    ];
  },
  images: {
    domains: ["images.pexels.com"],
  },
};

module.exports = nextConfig;
