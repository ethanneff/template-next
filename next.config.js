const path = '/template-web';
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: prod ? path : '',
  // assetPrefix: prod ? path : '/',
  images: {
    loader: prod ? 'imgix' : '',
    path: prod ? path : null,
  },
};
