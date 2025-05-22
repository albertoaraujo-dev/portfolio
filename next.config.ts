import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: '/portfolio',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
