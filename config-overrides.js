const { override, fixBabelImports } = require('customize-cra');
// const SentryCliPlugin = require('@sentry/webpack-plugin');

module.exports = function override(config, env) {
//   config.devtool = 'source-map';
//   config.plugins.push(
//     new SentryCliPlugin({
//         include: './build',    // 指定上传目录
//         // ignoreFile: '.gitignore',  // 指定忽略文件配置
//         release: '7bc5347af6a811eca31c429662ac0c7c',  // 指定发布版本
//         ignore: ['node_modules', 'webpack.config.js'], 
//         configFile: './.sentryclirc',   // 指定sentry上传配置
//         urlPrefix: '~/'   // 保持与publicpath相符
//     })
//   );
  return config;
}