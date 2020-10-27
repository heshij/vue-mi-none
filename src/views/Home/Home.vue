<template>
  <div class="home">
    <base-scroll :data="noteList" ref="scroll" :options="options" @pullingDown="pullingDown">
      <ul id="note-list--wrapper" class="note-list--wrapper">
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
        options: {
          pullDownRefresh: true
        },
        noteList: [],
        total: 0,
        listQuery: {
          page: 1,
          limit: 20
        }
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
      pullingDown () {
        this.getList()
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

      }
    }

    .note-list--wrapper {

    }

  }
</style>
