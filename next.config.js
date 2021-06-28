const prod = process.env.NODE_ENV === 'production';
const basePath = prod ? '/template-web' : '';

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`,
  images: {
    loader: prod ? 'imgix' : '',
    path: basePath,
  },
};
