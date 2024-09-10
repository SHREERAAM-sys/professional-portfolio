/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      domains: [
        "api.microlink.io", // Microlink Image Preview
      ],
    },
    output:"export",
    typescript: {
      ignoreBuildErrors: true,
    }
  };

export default nextConfig;
