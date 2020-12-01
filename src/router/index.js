//导入vue
import Vue from "vue";
//导入路由
import VueRouter from "vue-router";
const Home = () => import('../views/Home/Home')
const List = () => import('../views/List/List')
const Cart = () => import('../views/Cart/Cart')
const User = () => import('../views/User/User')

//安装路由
Vue.use(VueRouter)

//创建路由对象

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/list',
    component:List
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/user',
    component:User
  },
]

//实例化路由对象

const router = new VueRouter({
  routes
})

//导出路由对象

export default router
