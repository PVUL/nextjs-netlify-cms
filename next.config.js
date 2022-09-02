/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
    });
    return config;
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/admin',
  //       destination: '/admin/index.html',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
