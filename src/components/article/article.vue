<template>
    <transition name="article">
      <div class="article">
        <scroll class="articleScroll">
          <div>
            <div class="title">{{article.title}}</div>
            <div class="author">
              <span class="authors icon-center"><span>huqin</span></span>
              <span class="time icon-data"><span>{{article.time}}</span></span>
              <span class="classify icon-rate"><span></span></span>
            </div>
            <div class="content" v-html="article.content"></div>
            <div class="icon icon-left" @click="back"></div>
          </div>
        </scroll>
      </div>
    </transition>
</template>
<script type="text/ecmascript-6">
  import scroll from 'base/scroll/scroll'
  export default{
      props:{
        article:{
            type:Object,
            default:{}
        }
      },
      methods:{
          back(){
              this.$router.back(-1);
          }
      },
    components:{
      scroll
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .article
    position fixed
    z-index 3
    width 100%
    height 100%
    min-height 100%
    top 0px
    bottom 0
    background-color #adcc8a
    &.article-enter-active,&.article-leave-active
      transition all 0.3s
    &.article-enter,&.article-leave-to
      opacity 0
    .articleScroll
      height: 100%
      overflow: hidden
      .title
        padding 20px 0 0 0
        width 100%
        height 30px
        line-height 30px
        text-align center
        border-bottom 1px dotted white
      .author
        height 40px
        line-height 40px
        display flex
        .authors
          display: flex
          align-items: center
          justify-content: center
          text-align center
          flex 1
          span
            color red
            margin-left 10px
        .time
          display: flex;
          align-items: center;
          justify-content: center;
          text-align center
          flex 1
          span
            color red
            margin-left 10px
        .classify
          display: flex;
          align-items: center;
          justify-content: center;
          text-align center
          flex 1
          span
            color red
            margin-left 10px
      .content
        color #333
        padding 10px
      .icon
        position fixed
        top 0
        left 0
        width 32px
        height 32px
        display flex
        align-items center
        justify-content center
</style>
