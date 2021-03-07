// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展
const path = require('path')
module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  // webpackConfig.babel.plugins.push('BMap');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
    style: 'css',
    'BMap':'BMap'
  }]);
  // webpackConfig.plugins.push([new htmlWebpackconfig({template:"index.htlm"})]);
  webpackConfig.externals = {'BMap':'BMap'}
  console.log('wev',webpackConfig)
  return webpackConfig;
};
