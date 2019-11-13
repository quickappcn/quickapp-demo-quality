module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      ['@babel/preset-env', {
        // 编译结果保留async语法
        targets: {
          node: '8'
        }
      }]
    ],
    plugins: ['@babel/plugin-transform-modules-commonjs'],
    babelrcRoots: ['.', 'node_modules']
  }
}
