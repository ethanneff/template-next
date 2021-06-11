const basePath = process.env.NODE_ENV === 'production' ? '/template-web' : '';

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`,
  images: {
    loader: 'imgix',
  },
};
