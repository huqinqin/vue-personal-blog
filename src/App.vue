<template>
  <div id="app" ref="app">
    <transition name="navFade">
      <div class="box" ref="box">
        <HeadCont @translated="translated"></HeadCont>
        <Nav></Nav>
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </transition>
    <NavSelect :classify="classify" class="NavSelect" ref="navBar" @backTranslated="backTranslated"></NavSelect>
  </div>
</template>
<script>
  import HeadCont from 'components/head/head.vue'
  import Nav from 'components/nav/nav.vue'
  import NavSelect from 'base/navSelect/navSelect'
  import {getWebDate} from './config/base'
  import {prefix} from './config/dom.js'
  const transform = prefix('transform')
export default {
    data(){
      return {
        classify:[],
        isFullScreen:true,
        count:0
      }
    },
    methods:{
      _getWebDate(){
          const url = 'http://www.huqinqin.top/blog/public/admin/json/classify'
         getWebDate(url).then((res)=>{
            this.classify = res;
        })
      },
      translated(show){
        if(this.isFullScreen){
            this.$refs.box.style[transform] = `translate3d(-60%,0,0)`
            this.$refs.box.style["transition"] = `all 0.3s`
            this.$refs.navBar.$el.style.zIndex = 1;
            this.$refs.navBar.$el.style.opacity = 0.8;
            this.$refs.navBar.$el.style.display = "block";
            this.isFullScreen = false;
          }else{
             this.$refs.box.style[transform] = `translate3d(0,0,0)`
             this.$refs.box.style["transition"] = `all 0.3s`
             this.$refs.app.style.zIndex = 0
             this.$refs.navBar.$el.style.zIndex = -1;
             this.$refs.navBar.$el.style.opacity = 0;
             this.$refs.navBar.$el.style.display = "none";
             this.isFullScreen = true;
          }
          if(this.count){
            this.isFullScreen = false;
          }else{
            this.isFullScreen = show;
          }
         this.count = 0;
      },
      backTranslated(flag){
        this.$refs.box.style[transform] = `translate3d(0,0,0)`
        this.$refs.box.style["transition"] = `all 0.3s`
        this.$refs.navBar.$el.style.zIndex = -1;
        this.$refs.navBar.$el.style.display = "none";
        this.isFullScreen = flag;
        this.count = 1;
      }
    },
    mounted(){
        setTimeout(()=>{
          this._getWebDate();
        },20)
    },
    components:{
      HeadCont,
      Nav,
      NavSelect
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    height: 100%;
    .box
      height 100%
      &.navFade-enter-active,&.navFade-leave-active
        transition all  3s
      &.navFade-enter,&.navFade-leave
        transform translate3d(-90%,0,0)
</style>
