<template>
  <div class="goodsListItem">
    <img :src="item.show.img" alt="">
    <div class="item-box">
      <p>{{item.title}}</p>
      <span class="price">{{item.price}}</span>
      <span class="collect">
        <img src="../../../assets/img/common/collect.svg" alt="">
        {{item.cfav}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:"GoodsListItem",
  props:{
    item:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>
<style  scoped>
.goodsListItem{
 
  padding-top: 10px;
  width: 48%;
  position: relative;
  text-align: center;
}
.goodsListItem img{
  width: 100%;
  border-radius: 6px;
}


.item-box p{
  font-size: 10px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow: ellipsis;
}
.price{
  color: red;
  font-size: 15px;
}
.collect{
  padding-left: 20px;
  width: 20px;
  height: 20px;
  position: relative;
}
.collect img{
  width: 18px;
  height: 18px;
  padding-top: 5px;
}
/* .collect::before{
  content:'';
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
  background-size: 14px;
  position:absolute;
  width: 14px;
  height: 14px;
  right: 15px;
  top: -1px;
  
} */
</style>