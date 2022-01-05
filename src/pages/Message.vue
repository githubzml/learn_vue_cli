<template>
  <div>
    Message
    <ul>
      <!-- /home/message/detail -->
      <li v-for="(item, index) in list">
        <!-- query方式的对象写法 -->

        <!-- <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: item.id,
              info: item.info,
            },
          }"
        > -->
        <!-- 因为上面的路由层级太多 写跳转太多 直接给个名字 path=>name 
        /home/message/detail => xiangqing 再给路由器里面的路由添加对应的名字即可 简化路由写法 命名路由 -->
        <router-link
          :to="{
            name: 'xiangqing',
            query: {
              id: item.id,
              info: item.info,
            },
          }"
        >
          {{ item.info }} - {{ item.id }}

          <button @click="pushShow(item)">push路由</button>
          <button @click="replaceShow(item)">replace路由</button>
        </router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: "001",
          info: "消息",
        },
        {
          id: "002",
          info: "消息",
        },
        {
          id: "003",
          info: "消息",
        },
      ],
    };
  },
  methods: {
    pushShow(item) {
      this.$router.push({
        name: "xiangqing",
        query: {
          id: item.id,
          info: item.info,
        },
      });
    },

    replaceShow(item) {
      this.$router.replace({
        name: "xiangqing",
        query: {
          id: item.id,
          info: item.info,
        },
      });
    },
  },
};
</script>

<style>
</style>