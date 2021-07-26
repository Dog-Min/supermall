<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">shopping street</div>
    </nav-bar>
    <home-swiper :banners="banners" class="home-swiper"></home-swiper>
    <recommend :recommends = "recommends">
    </recommend>
    <feature-view></feature-view>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
import HomeSwiper from "./ChildComps/homeSwiper.vue"

import Recommend from './ChildComps/recommend.vue'
import FeatureView from './ChildComps/FeatureView'
import {getHomeMultidata} from "@/network/home.js"

export default {
 name:"Home",
 data(){
   return {
     banners:[],
     recommends:[]
   }
   
 },
 components:{
   NavBar,
  HomeSwiper,
  Recommend,
  FeatureView
 },
 //生命周期函数
 created(){
   //请求多个数据
   getHomeMultidata().then(res =>{
     //console.log(res);
     this.banners = res.data.data.banner.list
     this.recommends = res.data.data.recommend.list
     //console.log(this.banner)
     //console.log(this.recommends)
   })
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
  z-index: 1;
}
.home-swiper{
  padding-top: 44px;
}
</style>