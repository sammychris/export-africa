/** @type {import('next').NextConfig} */
const nextConfig = {
    export: 'output',
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
