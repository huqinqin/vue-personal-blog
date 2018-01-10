<template>
     <div class="web">
       <Listview :articleLis="articleLis" @openNewpage="openNewpage"></Listview>
       <keep-alive>
         <router-view :article="article" v-if="$route.meta.keepAlive"></router-view>
       </keep-alive>
     </div>
</template>
<script type="text/ecmascript-6">
  import {getWebDate} from '../../config/base'
  import Listview from 'base/listview/listview'
  export default{
      data(){
          return{
              articleLis:[],
              article:{}
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
             path:`/${this.type}/${index}`
           });
         return this.article;
       }
     },
     created(){
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
     position: fixed
     width: 100%
     top: 100px
     bottom: 0
</style>
