<template>
    <div class="menu-wrapper">
<!--      <van-icon name="ellipsis" />-->
      <van-icon name="setting-o" />
    </div>
</template>

<script>
  export default {
    name: 'MyMenu',
    data () {
      return {
      }
    }
  }
</script>

<style scoped lang="less">
  .menu-wrapper {
    position: fixed;
    top: 18px;
    right: 12px;
    z-index: 100;
  }
</style>
