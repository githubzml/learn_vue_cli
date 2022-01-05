import Vue from "vue";
import VueRouter from "vue-router";

import About from "../pages/About.vue";
import Home from "../pages/Home.vue";

import Message from "../pages/Message.vue";
import News from "../pages/News.vue";

import Detail from "../pages/Detail.vue";

import NewsDetail from "../pages/NewsDetail.vue"

import Guard from "../pages/Guard.vue"

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/about",
      component: About,
      meta: {
        title: "about"
      }
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "message",
          component: Message,
          children: [
            {
              //命名路由
              name: "xiangqing",
              path: "detail",
              component: Detail,
              //独享路由守卫 使用方式是一样的 只是对单独的进行限制
              // beforeEnter((to,from,next)=>{

              // })
            },
          ]
        },
        {
          path: "news",
          component: News,
          children: [
            // {
            //   //命名路由
            //   name: "newsxiangqing",
            //   //占位符
            //   path: "newsdatail/:id/:info",
            //   component: NewsDetail,
            // },
            {
              //命名路由
              name: "newsxiangqing",
              //占位符
              path: "newsdatail/:id/:info",
              component: NewsDetail,
              // 引出props

              // props:{a:1,b:2} 1.对象写法  值是固定的 
              // props: true  //2. 布尔写法 只能将 params 形式的参数 传递给组件 query形式的不行 

              // 定义了 不调用 但是执行了 叫做回调函数

              // 解构赋值的连续写法 3.函数写法

              props({ params }) {
                return {
                  id: params.id,
                  info: params.info
                }
              }
            },
          ]
        },
      ],
      meta: {
        title: "home"
      }
    },
    {
      path: "/guard",
      component: Guard,
      // 提供给开发人员一个自定义容器
      meta: {
        //是否需要权限认证
        isAuth: true,
        title: "guard"
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  //判断是否需要权限
  if (to.meta.isAuth) {
    //判断权限是否争取
    if (localStorage.getItem("aa") == "aa") {
      next();
    }
  } else {
    next();
  }
})

// 这个用的较少  还是一个时机的捕获过程
router.afterEach((to, from) => {
  //给标签的title设置值
  document.title = to.meta.title || "自定义呗";
})
export default router;