<template>
  <div class="web">
    <Scroll>
      <ul class="webBox">
        <li class="webWrapper" v-for="(item,index) in articleLis">
          <div class="left"><img :src="item.img" alt=""></div>
          <div class="right">
            <p class="title" @click="openNewpage(index)">{{item.title}}</p>
            <p class="intro">{{item.intro}}</p>
            <p class="time">
              <span class="icon-data">{{item.time}}</span>
              <span class="icon-rate rate">{{item.readNum}}</span>
            </p>
          </div>
        </li>
      </ul>
    </Scroll>
    <router-view :article="article"></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import {getWebDate,ERR_OK} from '../../config/base'
  import Scroll from 'base/scroll/scroll'
  export default{
      data(){
          return{
              articleLis:{},
              article:{}
          }
      },
     methods:{
       _getWebDate(){
         getWebDate().then((res)=>{
             if(res.code === ERR_OK){
               this.articleLis = res.data.article;
             }
         })
       },
       openNewpage(id){
         this.article = this.articleLis[id];
         this.$router.push({
             path:`/web/${this.article.id}`
           });
         return this.article;
       }
     },
     created(){
      this._getWebDate();
    },
     components:{
       Scroll
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/style.css'
   .web
     width 100%
     height: calc(100% - 180px)
     .webBox
       background-color #cae4ce
       padding 10px
       .webWrapper
         display flex
         align-items center
         display flex
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
