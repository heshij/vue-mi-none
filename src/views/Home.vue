<template>
  <div class="home">
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
