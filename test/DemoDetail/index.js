export default function(vm) {

  // 根据参数选择不同的测试
  switch (vm.caseTitle) {
    case 'case201':
      doCase201()
      break;
    case 'case202':
      doCase202()
      break;
    default:
      throw new Error(`未定义的测试内容`)
  }

  function doCase201 () {
    describe(`DemoDetail`, function() {
      it(`页面参数传递正确`, function(done) {
        expect(vm.externalString).to.equal('foo')
        done()
      })

      it(`DOM事件处理正确`, function(done) {
        vm.$emitElement('click', null, 'elText1')
        expect(vm.dataForEventType).to.equal('click')
        done()
      })
    })
  }

  function doCase202 () {
    describe(`DemoDetail`, function() {
      it(`页面参数传递正确`, function(done) {
        expect(vm.externalString).to.equal('bar')
        done()
      })

      it(`调用存储接口正确`, function(done) {
        // 更新
        vm.invokeStorageSet()
        // 获取
        vm.invokeStorageGet((data) => {
          let error
          try {
            expect(data).to.equal('v1')
          } catch (err) {
            error = err
          }
          done(error)
        }, 1e3)
      })
    })
  }
}
