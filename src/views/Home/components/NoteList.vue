<template>
  <li class="view">
    <div class="view-txt">
      <h2>{{noteList.text}}</h2>
      <span>{{noteList.time}}</span>
    </div>
    <van-image width="54"
               height="54"
               lazy-load
               :src="noteList.img_src"
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

    .view-txt {
      font-size: @font-size-md;
      color: @text-color;

      h2 {
        font-size: @font-size-lg-x;
        color: @black;
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
