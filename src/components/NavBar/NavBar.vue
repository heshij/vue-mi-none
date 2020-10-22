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

    .nav-bar {
      .fj(flex-start);
      padding: 6px 0 12px 32px;

      li {
        padding: 0 12px;
        font-size: @font-size-lg-xxx;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        @{deep} .van-icon {
          font-size: @font-size-lg-x;
          margin-left: 6px;
          font-weight: 700;
        }

        /*transition: font-size .5S;*/

        &.router-link-active {
          color: @black;
        }
      }
    }
  }
</style>
