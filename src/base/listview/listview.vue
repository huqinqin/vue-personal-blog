<template>
  <Scroll class="webScroll" :data="articleLis">
    <ul class="webBox">
      <li class="webWrapper" v-for="(item,index) in articleLis">
        <div class="left"><img v-lazy="item.pic" alt=""></div>
        <div class="right">
          <p class="title" @click="openNewpage(index)">{{item.title}}</p>
          <p class="intro">{{item.intro}}</p>
          <p class="time">
            <span class="icon-data">{{item.time}}</span>
            <span class="icon-rate rate">{{item.click}}</span>
          </p>
        </div>
      </li>
    </ul>
  </Scroll>
</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  export default{
      props:{
        articleLis:{
          type:Array,
          default:[]
        }
      },
      components:{
      Scroll
     },
      methods:{
        openNewpage(index){
          this.$emit("openNewpage",index);
        }
      }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .webScroll
    height: 100%
    overflow: hidden
    .webBox
      background-color #cae4ce
      padding 10px
      .webWrapper
        display flex
        align-items center
        margin-top 5px
      .left
        flex 0 0 60px
        width 60px
        height 60px
        img
          width 100%
          height 100%
          vertical-align middle
      .right
        flex 1
        display flex
        align-items center
        justify-content center
        margin-left 10px
        text-align left
        flex-direction column
        p
          width 100%
          font-size 14px
          &.title
          &.intro
            margin-top 5px
          &.time
            font-size 12px
            margin-top 5px
            .rate
              margin-left 10px
</style>
