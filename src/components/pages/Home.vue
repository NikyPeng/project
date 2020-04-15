<template>
  <a-layout class="body" id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <a-row type="flex">
        <a-col :span="3" class="logo">向阳花开</a-col>
      </a-row>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="240" style="background: #fff">
        <Navigation />
      </a-layout-sider>
      <a-layout style="padding: 24px 24px 0 24px">
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import Vue from 'vue'
import Navigation from '../Navigation.vue'
export default Vue.extend({
  name: 'Home',
  components: {
    Navigation
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
#components-layout-demo-top-side-2 .logo {
    padding: 2px 8px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
    color: #ffffff;
    text-align: center;
    font: bolder 20px/31px "Times New Roman",Georgia,Serif; 
}
.body{
  min-height: 100%;
}
</style>
