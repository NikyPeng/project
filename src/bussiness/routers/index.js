import Vue from "vue"
import cache from "../plugin/cache"
import VueRouter from "vue-router"
import Login from "../../components/Login"
import Home from "../../components/pages/Home"
import UserList from "../../components/pages/studentmanage/UserList"
import OrderList from "../../components/pages/studentmanage/OrderList"
import OrganizationList from "../../components/pages/channelmanage/OrganizationList"
import SettleAcounts from "../../components/pages/channelmanage/SettleAcounts"
import UserStatistics from "../../components/pages/datastatistics/UserStatistics"
import OrgStatistics from "../../components/pages/datastatistics/OrgStatistics"
import UserSetting from "../../components/pages/setting/UserSetting"
import RoleSetting from "../../components/pages/setting/RoleSetting"
import AuthoritySetting from "../../components/pages/setting/AuthoritySetting"
Vue.use(VueRouter);
let router =  new VueRouter({
  routes: [
    {path: '/login', component: Login},
    {
      path: '/', 
      component: Home,
      children: [
        {path: 'student', component: UserList},
        {path: 'student/order', component: OrderList},
        {path: 'channel/organization', component: OrganizationList},
        {path: 'channel/acounts', component: SettleAcounts},
        {path: 'statistics/organization', component: OrgStatistics},
        {path: 'statistics/user', component: UserStatistics},
        {path: 'setting/account', component: UserSetting},
        {path: 'setting/role', component: RoleSetting},
        {path: 'setting/authority', component: AuthoritySetting}
      ]
    }
  ],
  mode: 'hash' //默认：hash
})
//添加路由守卫
router.beforeEach((to, from, next) => {
  let token = cache.get("auth-token");
  if(!token && to.path !== '/login'){ //未登录进入登录页
    next('/login');
    return;
  }
  console.log("==beforeEach==", to, from);
  if(token && to.path !== '/student' && (from.path === '/login' || from.path === '/')){
    next('/student');
    return;
  }
  next();
})

export default router