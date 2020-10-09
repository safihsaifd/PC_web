import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Reg from '../views/reg.vue'
import NotFound from '../views/not-found.vue'
import MyCenter from '../views/mycenter.vue'
import Home from '../views/home.vue'
import Course from "../views/course.vue"
import CourseList from "../views/courselist.vue"
import LunBo from "../components/LunBo.vue"
import LunBo2 from "../components/LunBo2.vue"

Vue.use(VueRouter)

const routes = [
  //首页
  {path:"/",component:Home},
  //个人中心路由
  {path:'/mycenter',component:MyCenter},
  //登陆路由
  {path: '/login',component:Login},
  //注册
  {path:"/reg",component:Reg},
  //教程&课程
  {path:"/course",component:Course},
  //教程&课程详情
  {path:"/list/:uid",component:CourseList},
  //404
  {path:"*", component:NotFound},
  //测试轮播图
  {path:'/lunbo',component:LunBo},
  {path:"/lunbo2",component:LunBo2}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
