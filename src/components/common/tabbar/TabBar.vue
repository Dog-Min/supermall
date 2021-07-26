<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name:"TabBar"

}
</script>
<style  scoped>
#tab-bar{
  display: flex;
  background-color: #f6f6f6;
  height: 49px;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 10px;
}

</style>