// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // 这里是你要代理的接口路径
    createProxyMiddleware({
      target: 'http://localhost:5000', // 你的后端 API 地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // 如果需要重写路径
      },
    })
  );
};
