<template>
  <li class="view" @click="clickItem()">
    <div class="view-txt">
      <h2 class="van-multi-ellipsis--l3">{{noteList.title}}</h2>
      <span>{{noteList.display_time}}</span>
    </div>
    <van-image width="54"
               height="54"
               lazy-load
               :src="noteList.image_uri"
               class="van-hairline--surround">
    </van-image>
  </li>
</template>

<script>
  export default {
    name: 'NoteList',
    props: {
      noteList: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    methods: {
      clickItem (item) {
        this.$emit('select-item', item)
      }
    }
  }
</script>

<style scoped lang="less">
  .view {
    background-color: @white;
    padding: 16px 22px 20px 22px;
    margin: 0 12px 12px;
    border-radius: 14px;
    .fj();
    align-items: center;

    .view-txt {
      font-size: @font-size-md;
      color: @text-color;
      width: 240px;

      h2 {
        font-size: @font-size-lg-x;
        color: @black;
        text-align: left;
        margin-top: 0;
      }
    }

    .img-wrapper {
      position: relative;
      width: 54px;
      height: 54px;
      border-radius: 6px;
      overflow: hidden;

      .in-img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        object-fit: cover;
      }
    }
  }
</style>
