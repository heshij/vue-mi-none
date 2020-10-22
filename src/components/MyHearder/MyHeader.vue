<template>
  <div class="my-header__wrapper" :class="{'fixed-header':headerScroll}">
    <nav-bar/>
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
    computed: {},
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
    background-color: @header-background-color;
    padding-top: 60px;
    /*transition: all .3S;*/
  }

  .fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    padding-top: 0;
    opacity: 1;

    &.fade-enter-active, &.fade-leave-active {
      transition: all .5s
    }

    &.fade-enter, &.fade-leave-active {
      opacity: 0
    }

    .nav-bar__wrapper {
      background-color: @header-background-color;

      @{deep} .nav-bar {
        .fj(center);
        padding: 16px 0;

        li {
          font-size: @font-size-lg-xx;

          @{deep} .van-icon {
            font-size: @font-size-lg;
          }

          /*transition: font-size .5S;*/
        }
      }
    }
  }
</style>
