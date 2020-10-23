<template>
  <div class="home">
    <ul id="note-list--wrapper">
      <note-list v-for="item in noteList" :key="item.id" :note-list="item" :loading="loading"></note-list>
    </ul>
  </div>
</template>

<script>
  import { fetchList } from '../../api/note'
  import NoteList from './components/NoteList'
  // import Sortable from 'sortablejs'

  export default {
    name: 'Home',
    components: { NoteList },
    data () {
      return {
        noteList: [],
        total: 0,
        listQuery: {
          page: 1,
          limit: 20
        },
        loading: true
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
      getList () {
        fetchList(this.listQuery).then(res => {
          this.noteList = res.data.items
          this.total = res.data.total
          this.loading = false
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .home {
    background-color: @body-background-color;
    padding-bottom: 60px;
  }
</style>
