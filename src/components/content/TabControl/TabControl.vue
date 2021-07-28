<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in titles" 
    class="tabcontrol-item" :class="{active:index ===currentindex}">
      <span @click="changeSta(index)">
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:"TabControl",
  data(){
    return{
      currentindex:0,
    }
  },
  methods:{
    changeSta(index){
      this.currentindex = index;
      this.$emit("toTransferIndex",index)
    },
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    },
  }
}
</script>
<style  scoped>
.tabcontrol{
  height: 40px;
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-around;
  background-color:white;
  
}
.active{
  color: var(--color-high-text);
  border-bottom: 1px solid var(--color-high-text);
}

  
</style>