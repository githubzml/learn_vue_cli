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

# 2022-1-4

## p105

集中式数据管理 Vuex 数据共享

## p106

求和案例
转化为数字类型
select  :value
v-model.number

## p107

mutation 修改 加工state
state 状态
action 动作 对应的值 未知的值 发起ajax请求

dispatch (名称， 值)

## p108

搭建Vuex开发环境

## p109

求和案例 Vuex 版

## p110

Vuex 工具使用 以及一些问题的解释

1. 多个actions 是为了处理一系列连环的复杂逻辑

2. 直接写在 actions 开发者工具失效了 哈哈

3. 当业务复杂时 写在actions 而不是 页面组件中 发票报销 验证真假 验证地方 ... 业务逻辑复杂

优化 没有网络请求 可以越过dispatch 直接commit

## p111

getters 不是必须出现的  类似于 页面里面的computed

## p112 

mapState

## p113

事件传参 括弧默认传递的是事件

mapMutations mapActions

## p114 

多组件共享

## p115

Vuex 模块化1

操作同一个文件 容易造成版本冲突

操作进行分类
const personAbout = {
  state:{}, 
  mutations:{}, 
  actions:{}, 
  getters:{}
}
再写一个modules对象
modules:{
  AAA:personAbout
}
再写一个命名空间
const personAbout = {
  namespace:true, 
  state:{

    a:"",
    b:""

  }, 
  mutations:{}, 
  actions:{}, 
  getters:{}
}
页面上进行引用
...mapState("AAA", ["a", "b"])

## p116

Vuex 模块化2

页面上进行引用
分类名/方法名
this.$store.commit("AAA/ADD_LIST", value)

getters 
this.$store.getters["AAA/xxx"]

模块化编码 + 命名空间

一言API  彩虹屁API
https://api.uixsj.cn/

https://api.uixsj.cn/hitokoto/get

带有网络请求

更好维护 多种数据分类明确
2022-1-5

## p117 路由的简介

route 路由
router 路由器

单页面应用 用户体验更好 
不必调来跳去 
只是维护路径
局部更新内容

## p118 路由的基本使用

路径的变化

当前链接不刷新 只是局部更新
前端路由 路径发生改变 对应组件就会显示

路由的两种模式

页签闪烁
刷新键刷新

router-link 转成a标签

## p119 路由的注意点

路由导航
路由视图

pages 路由组件
components 组件

$route 不是一个

$router 是一个

## p120 嵌套路由

1. 注意 二级路由 自动添加 / 不用写
2. 跳转 带完整路径

## p121

路由传递参数 query写法

## p122

命名路由  简化跳转

## p123 

路由传递参数 params写法
params 路由必须是命名方式的 不能是path

## p124

路由的props 3种方式

## p125 

router-link 的replace模式

push 堆栈的方式 改变指针指向 可以回退

replace 替换掉 当前

使用
<router-link replace>

## p126 编程时路由导航

push
replace

this.$router.back(); 
this.$router.forword(); 
this.$router.go(); 

## p127 

缓存路由组件
include  组件名 

<keep-alive include ></keep-alive>

## p128

生命周期钩子
activted
deactivted

权限

## p129

路由守卫 就是路由对权限的控制

全局前置路由守卫

是否需要权限的校验

meta 提供容器 可以配置权限

键权

router.beforeEach((to, from, next)) 权限设置

router.afterEach((to, from)) 独有的信息  document.title

package.json 的 name

后置路由守卫

## p130

全局后置路由守卫
router.afterEach((to, from)) 特有的信息  document.title

## p131

某个路由独享的
独享路由守卫 

## p132

通过路由规则
组件内的路由守卫
beforeRouteEnter
beforeRouteLeave

hash

#/... hash值 不会作为路径的一部分发送请求给服务器

history

默认 hash

mode:"history"  上线有问题 要后端哪些是前端路由 哪些是后端路由 404

connect-history-api-fallback

1. 好看

2. # / 兼容性问题 history兼容性略差 好看

3. 放在服务器

生成最纯粹的 html css js

打包的速度取决于
项目大小
硬盘的读写速度

hash模式
history模式
地址干净美观
应用部署服务器需要后端人员支持，解决页面刷新服务器404问题

webpack

部署放在服务器上

static

public