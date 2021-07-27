<template>
  <div class="goods">
    <goods-list-item v-for="i in goods" :item="i" class="goods-list-item">

    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  components: { GoodsListItem },
  name:"GoodsList",
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style  scoped>
.goods{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

</style>