<template>
  <div>
    Person
    <div>
      {{ info }}
    </div>
    <p>发起一个ajax请求</p>
    <p>随机返回一个内容为：{{ poem }}</p>
    <button @click="getPoem">点我</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("personAbout", ["info", "poem"]),
  },
  methods: {
    ...mapActions("personAbout", ["getPoem"]),
  },
};
</script>

<style>
</style>