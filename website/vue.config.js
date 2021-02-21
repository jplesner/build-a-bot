module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api:8081/',
        changeOrigin: true,
      },
    },
    watchOptions: {
      poll: true,
    },
  },
};
