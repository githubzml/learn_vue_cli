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
 
