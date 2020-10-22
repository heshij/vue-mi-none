<template>
  <div class="home">
    <ul id="note-list--wrapper">
      <note-list v-for="item in noteList" :key="item.id" :note-list="item"></note-list>
    </ul>
  </div>
</template>

<script>
  import NoteList from './components/NoteList'
  import Sortable from 'sortablejs'

  const defalutList = [
    {
      text: 'star this repository',
      time: '2020年11月10日',
      img_src: 'https://pic1.zhimg.com/v2-b3eb343d355b3dcea396693634bd7ff6_is.jpg',
      id: 1
    },
    {
      text: 'fork this repository',
      time: '2020年11月10日',
      img_src: 'https://pic1.zhimg.com/v2-b3eb343d355b3dcea396693634bd7ff6_is.jpg',
      id: 2
    },
    {
      text: 'follow author',
      time: '2020年11月10日',
      img_src: '',
      id: 3
    },
    {
      text: 'vue-element-admin',
      time: '2020年11月10日',
      img_src: 'https://pic1.zhimg.com/v2-b3eb343d355b3dcea396693634bd7ff6_is.jpg',
      id: 4
    },
    {
      text: 'vue',
      time: '2020年11月10日',
      img_src: 'https://pic1.zhimg.com/v2-b3eb343d355b3dcea396693634bd7ff6_is.jpg',
      id: 5
    },
    {
      text: 'element-ui',
      time: '2020年11月10日',
      img_src: 'https://pic1.zhimg.com/v2-b3eb343d355b3dcea396693634bd7ff6_is.jpg',
      id: 6
    },
    {
      text: 'axios',
      time: '2020年11月10日',
      img_src: 'https://pic1.zhimg.com/v2-b3eb343d355b3dcea396693634bd7ff6_is.jpg',
      id: 7
    },
    {
      text: 'webpack',
      time: '2020年11月10日',
      img_src: 'https://pic1.zhimg.com/v2-b3eb343d355b3dcea396693634bd7ff6_is.jpg',
      id: 8
    }
  ]
  export default {
    name: 'Home',
    components: { NoteList },
    data () {
      return {
        noteList: defalutList
      }
    },
    computed: {},
    mounted () {
      // 拖拽事件的添加
      const el = document.getElementById('note-list--wrapper')
      const self = this
      Sortable.create(el, {
        delay: 300,
        animation: 200,
        // 拖拽结束后的操作
        onEnd ({ newIndex, oldIndex }) {
          // 修改data中的数组，
          const targetRow = self.noteList.splice(oldIndex, 1)[0]
          self.noteList.splice(newIndex, 0, targetRow)
        }
      })
    },
    methods: {}
  }
</script>
<style lang="less" scoped>
  .home {
    background-color: @body-background-color;
    padding-bottom: 60px;
  }
</style>
