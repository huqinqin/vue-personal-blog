<template>
    <div class="navBg"                                                                                                                                        >
      <ul class="navWrapper">
        <div class="wrapper">
          <li class="navItem" v-for="(item,index) in classify" @click.stop.prevent="jumpNewPage(index,flag)">{{item.typename}}</li>
        </div>
      </ul>
    </div>
</template>
<script type="text/ecmascript-6">
  import {getWebDate} from '../../config/base'
   export default{
      props:{
          classify:{
              type:Array,
              default:[]
          }
      },
     data(){
          return {
             classifyArt:[],
             flag:true
          }
     },
      methods:{
       jumpNewPage(index,flag){
         if(index === 0){
               var alias = "js";
               var url = 'http://www.huqinqin.top/blog/public/admin/Json/article1'
           }else if(index === 1){
             var alias = "project";
             var url = 'http://www.huqinqin.top/blog/public/admin/Json/article2'
           }else if(index === 2){
             var alias = "vue";
             var url = 'http://www.huqinqin.top/blog/public/admin/Json/article5'
           }else if(index === 3){
             var alias = "Angular";
             var url = 'http://www.huqinqin.top/blog/public/admin/Json/article6'
           } else if(index === 4){
             var alias = "webPro";
             var url = 'http://www.huqinqin.top/blog/public/admin/Json/article7'
           }else if(index === 5){
             var alias = "work";
             var url = 'http://www.huqinqin.top/blog/public/admin/Json/article8'
           }else if(index === 6){
             var alias = "mind";
             var url = 'http://www.huqinqin.top/blog/public/admin/Json/article9'
           }
           setTimeout(()=>{
             this._getData(url);
           },20)
           this.$router.push({
             path:`/${alias}`
           });
           this.$emit("backTranslated",flag)
       },
       _getData(url){
         getWebDate(url).then((res)=>{
           this.classifyArt = res;
           this.classifyArt.forEach((item)=>{
             item.pic = `http://www.huqinqin.top/blog/public${item.pic}`
           });
         })
       }
     }
   }
</script>
<style lang="stylus" rel="stylesheet/stylus">
   .navBg
     position fixed
     left 40%
     top 0
     background-color #333333
     opacity 0
     width 100%
     height 100%
     z-index -1
     .navWrapper
       width 100%
       padding 50px 10px 50px 10px
       box-sizing border-box
       .wrapper
         width 60%
         box-sizing border-box
         .navItem
           padding 0px 10px
           height 40px
           line-height 40px
           color white
           border-bottom 1px solid white
</style>
