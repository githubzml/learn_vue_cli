<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" v-model="Ipt" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="(item, index) in personList" :key="">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "PersonList",
  data() {
    return {
      Ipt: "",
    };
  },
  methods: {
    add() {
      const Obj = { Id: nanoid(), name: this.Ipt };
      this.$store.commit("ADDPERSON", Obj);
      this.Ipt = "";
    },
  },
  computed: {
    ...mapState(["personList"]),
  },
};
</script>

<style>
</style>