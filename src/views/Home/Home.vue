<template>
  <div class="home">
    <nav-bar/>
    <ul>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
      <li>this is home page</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar/NavBar.vue'

  export default {
    name: 'Home',
    components: { NavBar },
    data () {
      return {
      }
    },
    methods: {}
  }
</script>
<style lang="less" scoped>
  .home {
    padding-top: 50px;
    background-color: @body-background-color;

    .nav-bar__wrapper {
      background-color: @header-background-color;
      /deep/ .nav-bar {
        .fj(flex-start);
        padding: 6px 0 12px 32px;

        li {
          font-size: @font-size-lg-xxx;
        }
      }
    }
  }
</style>
