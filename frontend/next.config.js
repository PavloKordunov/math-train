const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',

    outputFileTracingRoot: path.join(__dirname, '../../'),

    images: {
        unoptimized: true,
        domains: ['84.247.181.29', 'localhost'],
    },

    async headers() {
        return [
            {
                source: '/:path*.{png,jpg,jpeg,svg,gif,ico}',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/mathlive-fonts/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ]
    },
}

module.exports = nextConfig
