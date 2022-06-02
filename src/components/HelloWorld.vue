<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <el-button @click="hi">按钮{{ count }}</el-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { holle } from "@/api/hello";
let msg = ref("音乐成功前端");

let count = ref(0);
let hi = () => {
  holle().then((res:any) => {
   msg.value=res.data
  });
};
</script>
<style lang="scss" scoped>
.app {
  h1 {
    color: red;
  }
}
</style>
