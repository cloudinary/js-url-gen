const bundlewatchConfig = {
  files: [
    {
      path: './dist/base.esm.js',
      maxSize: '10kb'
    },
    {
      path: './dist/base.umd.js',
      maxSize: '10kb'
    }
  ],
  defaultCompression: 'gzip',
};

module.exports = bundlewatchConfig;
