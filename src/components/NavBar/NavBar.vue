<template>
  <div class="nav-bar__wrapper">
    <ul class="nav-bar">
      <router-link tag="li" to="/home">便签
        <van-icon name="arrow-down"/>
      </router-link>
      <router-link tag="li" to="/todolist">待办</router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style lang="less" scoped>
  .nav-bar__wrapper {
    color: @text-color;
    font-size: @font-size-lg-xx;

    .nav-bar {
      .fj(center);
      padding: 16px 0;

      li {
        padding: 0 12px;

        &.router-link-active {
          color: @black;
        }
      }
    }
  }
</style>
