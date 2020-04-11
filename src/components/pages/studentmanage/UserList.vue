<template>
  <a-tabs :activeKey="tab" @change="changeTab">
    <a-tab-pane tab="未报名" key="1">未报名</a-tab-pane>
    <a-tab-pane tab="已报名" key="2" forceRender>已报名</a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "UserList",
  data() {
    return {
      tab: '1'
    }
  },
  methods: {
    getData() {

    },
    changeTab(e) {
      console.log("changeTab", e);
    }
  }
})
</script>
<style scoped>

</style>