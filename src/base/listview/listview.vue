<template>
  <Scroll>
    <ul class="webBox">
      <li class="webWrapper" v-for="(item,index) in articleLis">
        <div class="left"><img :src="item.pic" alt=""></div>
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
            this.$emit("openNewpage",index)
        }
      }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>
