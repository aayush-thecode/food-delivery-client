import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
      remotePatterns: [
        {
        protocol: 'https',
        hostname: 'https://food-delivery-app-oe9e.onrender.com',
        port: '',
        pathname: '/**'
      },      
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**'
      }
      ]
    }
};

export default nextConfig;
