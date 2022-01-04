module.exports = {
  // pages: {
  //   index: {
  //     // page 的入口
  //     // entry: 'src/index/main.js',
  //   },
  // },
  //关闭语法检查
  lintOnSave: false,
  // 开启代理服务器
  // 方式1 配置简单
  // devServer: {
  //   proxy: 'http://localhost:3000'
  // }
  // 方式2 
  // 可以请求本地 可以请求服务器 不冲突
  // 可以设置多个代理
  devServer: {
    proxy: {
      // /api 请求前缀
      '/hahah': {
        target: 'http://localhost:3000',
        pathRewrite: { "^/hahah": "" },
        ws: true, //用于支持webscoket
        changeOrigin: true //用于控制请求中的host值
      },
    }
  }
}

// 此处是commonJS
// export 是 ES6Js