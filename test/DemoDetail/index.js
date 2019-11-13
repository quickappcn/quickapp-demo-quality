export default function(vm) {
  describe(`DemoDetail`, function() {
    it(`测试DemoDetail页面vm属性`, function(done) {
      done()
    })

    it(`测试DemoDetail页面vm方法`, function(done) {
      expect(vm.text).to.equal('欢迎打开详情页')
      done()
    })
  })
}
