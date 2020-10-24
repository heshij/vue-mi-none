<template>
  <div class="scroll-wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import PullDown from '@better-scroll/pull-down'// pulldown 插件为 BetterScroll 扩展下拉刷新的能力
  import Pullup from '@better-scroll/pull-up'// pullup 插件为 BetterScroll 扩展上拉加载的能力
  import ScrollBar from '@better-scroll/scroll-bar'// scrollbar 插件为 BetterScroll 提供了样式美观的滚动条
  import NestedScroll from '@better-scroll/nested-scroll'// 协调 BetterScroll 双层嵌套的滚动行为

  BScroll.use(PullDown)
  BScroll.use(Pullup)
  BScroll.use(ScrollBar)
  BScroll.use(NestedScroll)
  export default {
    name: 'BaseScroll',
    props: {
      /**
       * 1 滚动的时候会派发scroll事件，会截流。
       * 2 滚动的时候实时派发scroll事件，不会截流。
       * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
       */
      probeType: {
        type: Number,
        default: 1
      },
      // 点击列表是否派发click事件
      click: {
        type: Boolean,
        default: true
      },
      // 是否开启横向滚动
      scrollX: {
        type: Boolean,
        default: false
      },
      // 是否派发滚动事件
      listenScroll: {
        type: Boolean,
        default: false
      },
      // 列表的数据
      scrollData: {
        type: Array,
        default: null
      },
      // 是否派发滚动到底部的事件，用于上拉加载
      pullup: {
        type: Boolean,
        default: false
      },
      // 是否派发顶部下拉的事件，用于下拉刷新
      pulldown: {
        type: Boolean,
        default: false
      },
      // 是否派发列表滚动开始的事件
      beforeScroll: {
        type: Boolean,
        default: false
      },
      // 当数据更新后，刷新scroll的延时
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
    mounted () {
      // 在 DOM 渲染完毕后初始化 better-scroll
      setTimeout(() => {
        this.initScroll()
      }, 20)
    },
    methods: {
      initScroll () {
        if (!this.$refs.wrapper) {
          return
        }
        // better-scroll 初始化
        this.bscroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
          scrollX: this.scrollX,
          pullDownRefresh: this.pulldown,
          pullUpLoad: this.pullup,
          scrollbar: this.scrollbar,
          nestedScroll: false
        })
        // 是否派发滚动事件
        if (this.listenScroll) {
          const self = this
          this.bscroll.on('scroll', (position) => {
            self.$emit('scroll', position)
          })
        }
        // 上拉
        if (this.pullup) {
          this.bscroll.on('scrollEnd', () => {
            // 滚动到底部
            if (this.bscroll.y <= (this.bscroll.maxScrollY + 50)) {
              // 派发滚动到底部的事件
              this.$emit('pullingUp')
            }
          })
        }
        // 下拉
        if (this.pulldown) {
          this.bscroll.on('touchEnd', (pos) => {
            // 下拉动作
            console.log(pos.y)
            if (pos.y > 50) {
              // 下拉刷新
              this.$emit('pullingDown')
            }
          })
        }
        if (this.beforeScroll) {
          this.bscroll.on('beforeScrollStart', () => {
            // 列表滚动前触发
            this.$emit('beforeScroll')
          })
        }
      },
      disable () {
        // 代理 better-scroll 的 disable 方法
        this.bscroll && this.bscroll.disable()
      },
      enable () {
        // 代理 better-scroll 的 enable 方法
        this.bscroll && this.bscroll.enable()
      },
      refresh () {
        // 代理 better-scroll 的 refresh 方法
        this.bscroll && this.bscroll.refresh()
      },
      scrollTo () {
        // 代理 better-scroll 的 scrollTo 方法
        this.bscroll && this.bscroll.scrollTo.apply(this.bscroll, arguments)
      },
      scrollToElement () {
        // 代理 better-scroll 的 scrollToElement 方法
        this.bscroll && this.bscroll.scrollToElement.apply(this.bscroll, arguments)
      }
    },
    watch: {
      // 监听数据的变化，重新计算高度
      data () {
        setTimeout(() => {
          this.refresh()
        }, this.refreshDelay)
      }
    }
  }
</script>

<style scoped lang="less">
  .scroll-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
