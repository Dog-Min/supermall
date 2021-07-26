<template>
  <div class="recommend">
     <div v-for="i in recommends" class="recommend-item">
       <a :href="i.link">
         <img :src="i.image" alt="">
       </a> 
       <div>
       {{i.title}}
        </div>
     </div>
    
  </div>
</template>

<script>
export default {
  name:"Recommends",
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
  },

}
</script>
<style  scoped>
.recommend{
  display: flex;
  width: 100%;
  flex: 1;
  justify-content:space-around;
  text-align: center;
  font-size: 5px;
  margin-bottom: 20px;
  border-bottom: 8px solid lightgray;
  
}
.recommend-item img{
  
  width: 80px;
  height: 80px;
}
</style>