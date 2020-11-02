<template>
  <div class="note-detail">
    {{this.$route.path}}
  </div>
</template>

<script>
  import { fetchArticle } from '../../api/note'

  export default {
    name: 'NoteDetail',
    data () {
      return {
        detail: []
      }
    },
    created () {
      const id = this.$route.params && this.$route.params.id
      this.fetchData(id)
    },
    methods: {
      fetchData (id) {
        fetchArticle(id).then(res => {
          this.detail = res.data
          console.log(this.detail)
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .note-detail {
    background-color: @white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

</style>
