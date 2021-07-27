<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">shopping street</div>
    </nav-bar>

    <home-swiper :banners="banners" class="home-swiper"></home-swiper>

    <recommend :recommends = "recommends">
    </recommend>

    <feature-view></feature-view>

    <tab-control :titles = "['流行','新款','精选']" class="TabControl">
    </tab-control>
    <!-- <goods-list :goods="goods['pop'].list">
    </goods-list> -->
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
    <p>666</p>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
import TabControl from '@/components/content/TabControl/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'

import HomeSwiper from "./ChildComps/homeSwiper.vue"
import Recommend from './ChildComps/recommend.vue'
import FeatureView from './ChildComps/FeatureView'

import {getHomeMultidata,getHomeGoods} from "@/network/home.js"


export default {
 name:"Home",
 data(){
   return {
     banners:[],
     recommends:[],
     goods:{
       'pop':{page:0, list:[]},
       'new':{page:0, list:[]},
       'sell':{page:0, list:[]},
     }
   }
   
 },
 components:{
   NavBar,
  HomeSwiper,
  Recommend,
  FeatureView,
  TabControl,
  GoodsList
 },
 methods:{
   //请求数据
   getHomeMultidata(){
     getHomeMultidata().then(res =>{
     //console.log(res);
     this.banners = res.data.data.banner.list
     this.recommends = res.data.data.recommend.list
     //console.log(this.banner)
     //console.log(this.recommends)
   })
   },
   getHomeGoods(type){
     let page = this.goods[type].page + 1
     getHomeGoods(type,page).then(res =>{
       //console.log(res)
       this.goods[type].list.push(...res.data.data.list)
       this.goods[type].page +=1
   })
   }
 },
 //生命周期函数钩子函数
 //一般可以在created函数中调用axios获取页面初始化所需的数据。
 created(){
   //请求多个数据
   this.getHomeMultidata()
   this.getHomeGoods('pop')
   this.getHomeGoods('new')
   this.getHomeGoods('sell')
 }
    
}
</script>
<style  scoped>
.home-nav{
  background-color:var(--color-tint);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.home-swiper{
  padding-top: 44px;
}
.TabControl{
  position:sticky;
  top:44px;
  z-index: 9;
}
</style>