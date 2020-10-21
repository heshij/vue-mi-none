<template>
  <div id="app">
    <my-header/>
    <router-view/>
  </div>
</template>

<script>
import MyHeader from './components/MyHearder/MyHeader'
export default {
  name: 'app',
  components: {
    MyHeader
  }
}
</script>

<style lang="less" scoped>
</style>
