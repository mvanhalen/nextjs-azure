/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "standalone", // Optimizes for Azure App Service
    //distDir: "build", // Custom build directory
};

export default nextConfig;
