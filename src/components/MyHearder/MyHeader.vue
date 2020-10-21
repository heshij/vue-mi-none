<template>
  <div class="my-header__wrapper">
    <transition name="van-slide-down">
      <nav-bar v-if="headerScroll"/>
    </transition>
    <my-menu/>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar/NavBar.vue'
  import MyMenu from '@/components/MyMenu/MyMenu.vue'

  export default {
    name: 'MyHeader',
    components: {
      NavBar,
      MyMenu
    },
    data () {
      return {
        headerScroll: false
      }
    },
    mounted () {
      window.addEventListener('scroll', this.pageScroll)
    },
    methods: {
      pageScroll () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        scrollTop > 24 ? this.headerScroll = true : this.headerScroll = false
      }
    }
  }
</script>

<style scoped lang="less">
  .my-header__wrapper {
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 60px;
    background-color: @header-background-color;
  }
</style>
