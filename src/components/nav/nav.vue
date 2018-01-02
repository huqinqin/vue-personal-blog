<template>
   <div class="nav">
     <ul class="navSty">
       <li class="web">
         <router-link to="/web">前端</router-link>
       </li>
       <li class="aboutme">
         <router-link to="/aboutme">简介</router-link>
       </li>
       <li class="life">
         <router-link to="/life">生活</router-link>
       </li>
       <li class="talk">
         <router-link to="/talk">留言</router-link>
       </li>
     </ul>
   </div>
</template>
<script type="text/ecmascript-6">
   export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .navSty
    position relative
    z-index 1
    display flex
    height 30px
    line-height 30px
    background-color darkolivegreen
    li
      text-align center
      flex 1

      box-sizing border-box
      a
       color #333
       &.router-link-active
        color yellow
        padding-bottom 2px
        border-bottom  2px solid yellow
</style>
