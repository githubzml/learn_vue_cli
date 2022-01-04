export default {
  install(Vue) {
    // 全局截取
    Vue.filter("mySlice", function (value) {
      return value.slice(0, 4);
    })

    // 添加全局方法
    Vue.prototype.hello = function () {
      console.log('aaa');
    }
    console.log('@Vue', Vue);
  }
}