import withPlugins from 'next-compose-plugins';
import withTM from 'next-transpile-modules';

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ['cdn2.thecatapi.com'],
    unoptimized: true,
  },
  // other configurations...
};

export default withPlugins([withTM()], nextConfig);