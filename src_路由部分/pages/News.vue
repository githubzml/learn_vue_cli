<template>
  <div>
    <h2>News</h2>
    <ol>
      <li v-for="item in list">
        <router-link
          :to="{
            //只能使用 name
            name: 'newsxiangqing',
            params: {
              id: item.id,
              info: item.info,
            },
          }"
        >
          {{ item.info }} - {{ item.id }}
        </router-link>
      </li>
    </ol>
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
          info: "消息1",
        },
        {
          id: "002",
          info: "消息2",
        },
        {
          id: "003",
          info: "消息3",
        },
      ],
    };
  },
};
</script>

<style>
</style>