<template>
  <div class="Box">
    <Scroll class="commonScroll">
      <div class="life1">
        <div class="process"></div>
        <div class="lifeBox">
          <div class="lifeWrapper">
            <div class="data">2017-01-08</div>
            <div class="circle"></div>
            <div class="content">生活真的很美好,真心珍惜现有的美好生活</div>
          </div>
          <div class="lifeWrapper">
            <div class="data">2017-01-07</div>
            <div class="circle"></div>
            <div class="content">热爱生活，看到希望之光，向困难说再见</div>
          </div>
          <div class="lifeWrapper">
            <div class="data">2017-01-05</div>
            <div class="circle"></div>
            <div class="content">人活一生，值得爱的东西很多，不要因为一个不满意，就灰心</div>
          </div>
          <div class="lifeWrapper">
            <div class="data">2017-01-01</div>
            <div class="circle"></div>
            <div class="content">创造机会的人是勇者，等待机会的人是愚者。</div>
          </div>
          <div class="lifeWrapper">
            <div class="data">2017-12-15</div>
            <div class="circle"></div>
            <div class="content"> 人一定要受过伤才会沉默专注，无论是心灵或肉体上的创伤，对成长都有益处。</div>
          </div>
          <div class="lifeWrapper">
            <div class="data">2017-12-13</div>
            <div class="circle"></div>
            <div class="content"> 日子，过的是心情；生活，要的是质量。</div>
          </div>
          <div class="lifeWrapper">
            <div class="data">2017-12-08</div>
            <div class="circle"></div>
            <div class="content">不悲过去，非贪未来，心系当下，由此安详。</div>
          </div>
          <div class="lifeWrapper">
            <div class="data">2017-12-01</div>
            <div class="circle"></div>
            <div class="content"> 当等待遇上等待，当矜持遇上矜持，作祟的到底是自尊还是自卑？</div>
          </div>
        </div>
      </div>
    </Scroll>
  </div>
</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  export default{
     components:{
       Scroll
     }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
   .Box
     position: fixed
     width: 100%
     top: 100px
     bottom: 0
     .commonScroll
       height 100%
       overflow hidden
       .life1
         width 100%
         padding 10px
         box-sizing border-box
         position relative
         .process
           width 2px
           min-height 500px
           background-color #AAA
           position absolute
           left calc(27% + 10px)
         .lifeBox
           width 100%
           .lifeWrapper
             width 100%
             display flex
             align-items center
             margin-top:10px
             .data
               font-size 14px
               flex 0 0 27%
             .circle
               display flex
               flex 0 0 10px
               width 10px
               height 10px
               border-radius 50%
               border 1px solid #999
               box-shadow: 0 0 3px 3px white;
             .content
               margin-right 10px
               padding-left 10px
               margin-left 11px
               border 1px solid rgba(0,0,0,0.1)
               box-sizing border-box
               border-radius 8px
               flex 1
               background-color #9ed6b1
               border-left none
               position relative
               &::after
                 right: 100%;
                 border: solid transparent;
                 content: " ";
                 height: 0;
                 width: 0;
                 position: absolute;
                 pointer-events: none;
                 border-right-color: #9ed6b1;
                 border-width: 10px;
                 top: calc(50% - 10px);
</style>
