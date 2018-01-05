<template>
  <Alljs :url="url" :type="type"></Alljs>
</template>
<script type="text/ecmascript-6">
  import Alljs from 'base/alljs/alljs'
  export default{
    data(){
      return{
        url:'http://www.huqinqin.top/blog/public/admin/Json/article5',
        type:"vue"
      }
    },
    components:{
      Alljs
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>
