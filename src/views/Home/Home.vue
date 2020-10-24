<template>
  <div class="home">
    <base-scroll :scroll-data="noteList" :pulldown="true" :pullingDown="pulldown" ref="scroll">
      <ul id="note-list--wrapper" class="note-list--wrapper">
        <div class="pulldown-wrapper">
          <div v-show="beforePullDown">
            <span>Pull Down and refresh</span>
          </div>
          <div v-show="!beforePullDown">
            <div v-show="isPullingDown">
              <span>Loading...</span>
            </div>
            <div v-show="!isPullingDown">
              <span>Refresh success</span>
            </div>
          </div>
        </div>
        <note-list v-for="item in noteList" :key="item.id" :note-list="item"></note-list>
      </ul>
    </base-scroll>
  </div>
</template>

<script>
  import { fetchList } from '../../api/note'
  import NoteList from './components/NoteList'
  import BaseScroll from '../../components/BaseScroll/BaseScroll'
  // import Sortable from 'sortablejs'

  export default {
    name: 'Home',
    components: {
      BaseScroll,
      NoteList
    },
    data () {
      return {
        noteList: [],
        total: 0,
        listQuery: {
          page: 1,
          limit: 20
        },
        beforePullDown: true,
        isPullingDown: false
      }
    },
    computed: {},
    created () {
      this.getList()
    },
    mounted () {
      // 拖拽事件的添加
      // const el = document.getElementById('note-list--wrapper')
      // const self = this
      // Sortable.create(el, {
      //   delay: 300,
      //   animation: 200,
      //   // 拖拽结束后的操作
      //   onEnd ({ newIndex, oldIndex }) {
      //     // 修改data中的数组，
      //     const targetRow = self.noteList.splice(oldIndex, 1)[0]
      //     self.noteList.splice(newIndex, 0, targetRow)
      //   }
      // })
    },
    methods: {
      pulldown () {
        console.log('下拉')
      },
      getList () {
        this.$toast.loading({
          message: '加载中...',
          forbidClick: true
        })
        fetchList(this.listQuery).then(res => {
          this.noteList = res.data.items
          this.total = res.data.total
          this.$toast.clear()
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  @{deep} .van-skeleton__row, .van-skeleton__title {
    height: 16px;
    background-color: #ececec;
  }

  @{deep} .van-skeleton__avatar {
    background-color: #ececec;
  }

  .home {
    background-color: @body-background-color;
    padding-bottom: 60px;

    @{deep} .scroll-wrapper {
      height: 556px;

      .pulldown-wrapper {
        position: absolute;
        z-index: 1;
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        transform: translateY(-100%) translateZ(0);
        text-align: center;
        color: #999;
        font-size: @font-size-md;
      }
    }

    .note-list--wrapper {

    }

  }
</style>
