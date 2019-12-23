module.exports = {
  extension: ['.ux'],
  // 覆盖以匹配到ux文件
  exclude: ['node_modules/**/*.js', 'test/**/*.js'],
  reporter: ['html'],
  // remap之后不要排除操作
  excludeAfterRemap: false
}
