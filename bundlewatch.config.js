const bundlewatchConfig = {
  files: [
    {
      path: './dist/bundles/umd/base.js',
      maxSize: '10kb'
    }
  ],
  defaultCompression: 'gzip',
};

module.exports = bundlewatchConfig;
