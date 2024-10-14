const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // 你可以在这里自定义 webpack 配置
      return webpackConfig;
    },
    alias: {
      '@': path.resolve(__dirname, 'src'), 
    },
  },
};
