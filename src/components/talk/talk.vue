<template>
  <div class="wrapper">
    <Scroll :data="message" class="commonScroll">
      <div class="talk1">
        <div class="process" v-for="item in message">
          <div class="left">
            <img src="../../common/img/green1.jpg" alt="">
          </div>
          <div class="right">
            <p class="name">{{item.username}}</p>
            <p v-html="item.content"></p>
          </div>
        </div>
      </div>
    </Scroll>
  </div>
</template>
<script type="text/ecmascript-6">
  import {getWebDate} from '../../config/base'
  import Scroll from 'base/scroll/scroll'
   export default{
      data(){
          return {
              message:[]
          }
      },
      methods:{
        _getWebDate(){
          const url = 'http://www.huqinqin.top/blog/public/admin/Json/message';
          getWebDate(url).then((res)=>{
            this.message = res;
          })
        },
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
   .wrapper
     position: fixed
     width: 100%
     top: 100px
     bottom: 0
     .commonScroll
       height: 100%
       overflow: hidden
       .talk1
         padding 10px
         box-sizing border-box
         width 100%
         .process
          display flex
          align-items center
          justify-content center
          margin-top 10px
          .left
            flex 0 0 30px
            width 30px
            height 30px
            img
              width 100%
              height 100%
              border-radius 50%
              vertical-align middle
          .right
            flex 1
            padding 10px
            box-sizing border-box
            margin-left 10px
            position relative
            border 1px solid #999
            border-left none
            background-color #80d698
            border-radius 10px
            &::before
              right: 100%;
              border: solid transparent;
              content: " ";
              height: 0;
              width: 0;
              position: absolute;
              pointer-events: none;
              border-right-color: #80d698;
              border-width: 10px;
              top: calc(50% - 10px);
            .name
              color red
</style>
