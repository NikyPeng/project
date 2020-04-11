<template>
  <a-menu 
    mode="inline" 
    :openKeys="openKeys"
    v-model="selectKey" 
    @click="checkItem"
    @openChange="openChange"
    style="width: 240px;height: 100%; borderRight: 0">
    <a-sub-menu v-for="item in navigators" :key="item.key">
      <span slot="title"><a-icon :type="item.icon" /><span>{{item.title}}</span></span>
      <a-menu-item v-for="ch in item.children" :key="ch.path">{{ch.title}}</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Navigation',
  data() {
    return {
      openKeys: ['student'],
      selectKey: ['/student'],
      navigators: [{
        key: "student",
        title: "学生管理",
        icon: "user",
        children: [{
          title: "用户明细",
          path: "/student"
        },{
          title: "用户订单",
          path: "/student/order"
        }]
      },{
        key: "channel",
        title: "渠道管理",
        icon: "team",
        children: [{
          title: "培训机构商",
          path: "/channel/organization"
        },{
          title: "培训机构结算",
          path: "/channel/acounts"
        }]
      },{
        key: "statistics",
        title: "数据统计管理",
        icon: "pie-chart",
        children: [{
          title: "用户数据",
          path: "/statistics/user"
        },{
          title: "机构人数",
          path: "/statistics/organization"
        }]
      },{
        key: "operate",
        title: "运营管理",
        icon: "solution",
        children: []
      },{
        key: "setting",
        title: "系统设置",
        icon: "setting",
        children: [{
          title: "账户管理",
          path: "/setting/account"
        },{
          title: "角色管理",
          path: "/setting/role"
        },{
          title: "权限设置",
          path: "/setting/authority"
        }]
      }]
    }
  },
  mounted() {
    window.addEventListener("hashchange", (e) => {
      console.log("==hashchange==", e)
      let route = this.$router.currentRoute.path;
      this.selectKey.splice(0,1, route);
      let key = route.split('/').shift();
      this.openKeys.indexOf(key) < 0 && this.openKeys.push(key);
    })
  },
  methods: {
    openChange(e) {
      this.openKeys = e;
    },
    checkItem(e) {
      console.log("checkItem", window.location.hash);
      this.$router.push(e.key);
    }
  }
})
</script>