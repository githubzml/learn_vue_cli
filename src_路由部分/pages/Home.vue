<template>
  <div>
    <hr />
    我是home
    <br />
    <router-link to="/home/message">Message</router-link>
    <router-link to="/home/news">News</router-link>

    <button @click="forward">前进</button>
    <button @click="back">后退</button>
    <button @click="go">go</button>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("this", this.$router);
  },
  methods: {
    forward() {
      this.$router.forward();
    },
    back() {
      this.$router.back();
    },
    go() {
      // 前进或者后退几步
      this.$router.go(1);
    },
  },
};
</script>

<style>
</style>