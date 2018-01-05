<template>
     <div class="web">
       <Listview :articleLis="articleLis" @openNewpage="openNewpage"></Listview>
       <router-view :article="article"></router-view>
     </div>
</template>
<script type="text/ecmascript-6">
  import {getWebDate} from '../../config/base'
  import Listview from 'base/listview/listview'
  export default{
      data(){
          return{
              articleLis:[],
              article:[]
          }
      },
     props:{
          url:{
              type:String,
              default:""
          },
          type:{
              type:String,
              default:"web"
          }
     },
     methods:{
       _getWebDate(){
         const url = this.url;
         getWebDate(url).then((res)=>{
             this.articleLis = res;
             this.articleLis.forEach((item)=>{
               item.pic = `http://www.huqinqin.top/blog/public${item.pic}`
           });
         })
       },
       openNewpage(index){
         this.article = this.articleLis[index];
         this.$router.push({
             path:`/${this.type}/${this.article.index}`
           });
         return this.article;
       }
     },
     mounted(){
      this._getWebDate();
    },
     components:{
       Listview
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/style.css'
   .web
     height 500px
     width 100%
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
