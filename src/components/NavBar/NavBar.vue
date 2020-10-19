<template>
  <div class="nav-bar__wrapper">
    <van-row type="flex">
      <van-col span="6"><router-link tag="span" to="/home">便签</router-link></van-col>
      <van-col span="6"><router-link tag="span" to="/todolist">待办</router-link></van-col>
    </van-row>
  </div>
</template>

<script>
import { Col, Row } from 'vant'

export default {
  name: 'NavBar',
  components: {
    [Col.name]: Col,
    [Row.name]: Row
  }
}
</script>

<style lang="less" scoped>
  @import "../../style/var.less";
  .nav-bar__wrapper {
    font-size: @font-size-md;
    text-align: center;
  }
</style>
