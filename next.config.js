const path = '/template-next';
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: prod ? path : '',
  images: {
    loader: prod ? 'imgix' : '',
    path: prod ? path : null,
  },
};
