<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'App'
})
</script>
<style scoped>
  #app{
    width: 100%;
    height: 100%;
  }
</style>
