import Vue from "vue";
import VueRouter from "vue-router";

const Home  = ()=> import('@/views/home/Home.vue')
const Category  = ()=> import('@/views/category/Category.vue')
const Carts  = ()=> import('@/views/carts/Carts.vue')
const Profile  = ()=> import('@/views/profile/Profile.vue')

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
//安装插件 
Vue.use(VueRouter)
//创建router
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
    path:'/category',
    component:Category
  }
  ,
  {
    path:'/carts',
    component:Carts
  }
  ,
  {
    path:'/profile',
    component:Profile
  }

]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
