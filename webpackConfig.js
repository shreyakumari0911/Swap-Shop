const path = require('path');

module.exports = {
    mode: 'development',
  entry: './src/server.js', // The entry point of your application
  output: {
    filename: 'bundle.js', // The name of the output bundle
    path: path.resolve(__dirname, 'dist'), // The directory where the bundle will be generated
  },
  resolve: {
    fallback: {
      async_hooks: false,
      zlib: require.resolve('zlib-browserify'),
      querystring: require.resolve('querystring-es3'),
      crypto: require.resolve('crypto-browserify'),
    buffer: require.resolve('buffer/'),
    url: require.resolve('url/'), // For 'url' module
    fs: false, // For 'fs' module (if not needed in the browser)
    stream: require.resolve('stream-browserify'),
    timers: require.resolve('timers-browserify'),
    tls: false, // For 'tls' module (if not needed in the browser)
    http: require.resolve('stream-http'), // For 'http' module
    },
  },
};
