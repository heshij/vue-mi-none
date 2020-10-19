<template>
  <div class="home">
    <van-button type="info" size="small" @click="showToast">按钮1</van-button>
    <ul>
      <li v-for="(item, index) in datalists" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { Button, Toast } from 'vant'

export default {
  name: 'Home',
  components: {
    [Button.name]: Button
  },
  data () {
    return {
      datalists: ['test1', 'test2', 'test3', 'test4', 'test5', 'test6']
    }
  },
  methods: {
    showToast () {
      Toast('点击')
    }
  }
}
</script>
<style lang="less" scoped>
</style>
