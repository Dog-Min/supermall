<template>

   
    <div class="tabbar-item" @click="itemClick">
        <div v-if = "!isActive"><slot  name="item-icon"></slot></div>
        <div v-else><slot   name="item-icon-active"></slot></div>
        <div :style = "activeStyle" ><slot name="item-text"></slot></div>
      </div>

   
</template>

<script>
export default {
  name:"TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"red"
    }
  },
  data(){
    return{
      // isActive:true
      }
    },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !==-1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  }
}

</script>
<style  scoped>
 .tabbar-item {
    flex:5;
    font-size: 120%;
  }
  .tabbar-item img {
    margin-top: 2px;
    height: 24px;
    width:24px;
    
  }
</style>