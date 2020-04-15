module.exports = {
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://admin-online.sztedai.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}