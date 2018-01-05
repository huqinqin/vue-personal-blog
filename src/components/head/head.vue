<template>
   <div class="head" ref="head">
     <div class="word">
       <p>我在冰封的深海，寻找希望的缺口</p>
       <p>却在午夜惊醒时，瞥见绝美的月光。</p>
     </div>
     <div class="icon" @click.stop.prevent="translated">
       <span class="icon-nav"></span>
     </div>
   </div>
</template>
<script type="text/ecmascript-6">
   export default{
       data(){
          return{
              show:false,
          }
       },
       methods:{
         translated(){
            this.show = !this.show
            this.$emit("translated",this.show);
         },
       }
   }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .head
    position relative
    z-index 1
    width 100%
    height 0
    padding-top 40%
    background url("./bg.jpg") no-repeat;
    background-size cover
    background-color yellow
    .word
     position absolute
     left 6px
     top 12px
     font-size 12px
     p
      margin-top 5px
    .icon
     width 30px
     height 30px
     position fixed
     left 85%
     top 2%
     display: flex
     align-items: center
     justify-content: center
     border: 1px solid #888
</style>
