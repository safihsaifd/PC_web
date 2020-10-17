import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Reg from '../views/reg.vue'
import NotFound from '../views/not-found.vue'
import MyCenter from '../views/mycenter.vue'
import CourseList from "../views/courselist.vue"

Vue.use(VueRouter)

const routes = [
  //首页
  {
    path:"/",
    name:'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
  },
  //个人中心路由
  {path:'/mycenter',component:MyCenter},
  //登陆路由
  {path: '/login',component:Login},
  //注册
  {path:"/reg",component:Reg},
  //教程&课程
  {
    path:"/course",
    name:'Course',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "course" */ '../views/course.vue')
  },
  {
    path:"/search",
    name:'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "course" */ '../views/search.vue')
  },
  //教程&课程详情
  {path:"/list/:uid",component:CourseList},
  //404
  {path:"*", component:NotFound},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
