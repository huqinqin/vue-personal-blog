<template>
    <div class="navBg">
      <ul class="navWrapper">
        <div class="wrapper">
          <li class="navItem" v-for="item in classify">{{item}}</li>
        </div>
      </ul>
    </div>
</template>
<script type="text/ecmascript-6">
   export default{
      props:{
          classify:{
              type:Array,
              default:[]
          }
      }
   }
</script>
<style lang="stylus" rel="stylesheet/stylus">
   .navBg
     position fixed
     left 0
     top 0
     z-index -1
     background-color #333333
     opacity 0.8
     width 100%
     height 100%
     .navWrapper
       width 100%
       padding 50px 10px 50px 10px
       box-sizing border-box
       .wrapper
         width 60%
         float: right
         box-sizing border-box
         .navItem
           padding 0px 10px
           height 40px
           line-height 40px
           color white
           border-bottom 1px solid white
</style>
