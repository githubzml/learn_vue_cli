## p62

创建 vue-cli

.css .html .js

lint 语法检测 耽误编码

README.md
什么项目 
怎么用

移动端的理想视口

vue-cli 配置好的入口文件

分析脚手架结构

## p63

render 函数

Vue 核心 + 模板解析器

打包 再包含模板解析器 没有什么作用 为什么使用阉割版的 或者精简版的
runtime 运行版本 esm  ES module

Vue 包含：核心功能+模板解析器

精简版的Vue  不包含模板解析器的Vue  能精简点体积 只包含：核心功能

## p64

vue inspect > output.js 配置文件隐藏起来了 怕给整坏了 哈哈

生成目录结构

```
|——— a
|———— b
|   |———— c 
|   |———— d
|      |———— e
```

## p65

ref 属性

## p66

props

props:["name", "age"]; 

props:{
  name: String, 
  age: Number
}

props:{
  name:{

    type:String,
    required:true

  }, 
  age:{

    type:Object,
    default(){
      return{}
    }

  }, 
}

## p67

mixin

data methods ... 以原为主
mounted 先加载mixin 再加载原

## p68

插件

## p69

scoped 样式

scoped 生成一串随机数 变形为属性选择器

固定的发展事物规律 经过反复测试 经过验证

npm view webpack versions 查看包的版本

less-loader 版本兼容问题 webpack    yarn add less-loader@6

## p70

页面静态组件

忌讳 拿过来就写

分析页面的结构

base基本样式

## p71

todolist

UUID 

nanoid 简单版

## p72

组件通信 状态提升

## p73

取消勾选

注意 不要更改props值得传递

## p74

删除

## p75 

统计 全部/已完成

## p76

全选/全不选/清除已选

# 2021-12-30

## p77

总结 todolist

## p78

WebStroage

localStorage/sessionStorage
存 读 删 清

## p79

todolist WebStroage版本

## p80

内置事件拿过来直接用
click
keyup
...

状态提升 实现子给父传递事件
自定义事件 实现子给父传递事件
this.$emit()

1. 3秒中后 触发 this.$refs.student.$on("thing",(回调函数))
2. 只触发一次 .once (一次性)

传递过来一个对象 用 ... 解析 

## p81

解绑事件

this.$off(["", ""]) 解绑多个

## p82

自定义事件总结

## p83

自定义事件todolist

## p84

 $Bus
全局事件总线1

## p85

全局事件总线2

## p86

全局事件总线todolist

## p87

发布订阅 npm i pubsub

## p88

发布订阅todolist

## p89

编辑 按钮

## p90

模板解析 效率问题

回调函数

DOM更新完毕后再调用

this.$nextTick()

## p91

动画效果

## p92

过渡效果

## p93

多个元素过渡

## p94 

animate.css
https://animate.style/

## p95

总结过渡与动画

# 2021-12-31

## p96

配置请求信息

减少自己操作DOM

xhr 内置的
axios 封装的
fetch 内置的 1. 两层返回 2. 兼容性问题IE上不能用

response响应对象 response.data 才是数据

1. cors 加特殊的响应头
2. jsonp get
3. 代理 1.nginx 开启代理服务器
       2.vue-cli

1. 不能灵活配置多个代理
2. 不能控制它是请求 根目录下的 还是服务器下的
以上是缺点
devServer: {

    proxy: 'http://localhost:3000'

  }
不是说是垃圾 而是不完美 

## p97

 方式2 
  1. 可以请求本地 可以请求服务器 不冲突
  2. 可以设置多个代理
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

## p98

组件拆分

search
list

public 直接引入不会经过编译 放入第三方资源
assets 会经过编译

## p99

github 的免费在线接口

https://api.github.com/search/users?q=

https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000

## p100

github案例完善

## p101

vue 1.0 vue-resource

## p102

默认插槽
Category 分类

# 2022-1-3

## p103

具名插槽

## p104

作用域插槽
