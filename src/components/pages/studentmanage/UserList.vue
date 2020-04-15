<template>
  <a-tabs :tabBarStyle="{display: 'flex'}" :activeKey="tab" @change="changeTab">
    <a-tab-pane tab="未报名" key="1">
      <InfoTable @turnPage="updateData" :type="tab" />
    </a-tab-pane>
    <a-tab-pane tab="已报名" key="2" forceRender>
      <InfoTable @turnPage="updateData" :type="tab" />
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
import Vue from 'vue'
import InfoTable from './InfoTable.vue'
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
      if(this.tab === e) return;
      console.log("changeTab", e);
      this.tab = e;
    },
    updateData(e) {
      console.log("updateData", e)
    }
  },
  components: {
    InfoTable
  }
})
</script>
<style scoped>

</style>