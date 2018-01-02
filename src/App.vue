<template>
  <div id="app">
    <transition name="navFade">
       <div class="box" ref="box" >
          <HeadCont @translated="translated"></HeadCont>
          <Nav></Nav>
          <router-view/>
       </div>
    </transition>
    <NavSelect :classify="classify" class="NavSelect"></NavSelect>
  </div>
</template>
<script>
  import HeadCont from 'components/head/head.vue'
  import Nav from 'components/nav/nav.vue'
  import NavSelect from 'base/navSelect/navSelect'
  import {getWebDate,ERR_OK} from './config/base'
  import {prefix} from './config/dom.js'
  const transform = prefix('transform')
export default {
    data(){
      return {
        classify:[],
        show:true
      }
    },
    methods:{
      _getWebDate(){
        getWebDate().then((res)=>{
          if(res.code === ERR_OK){
            this.classify = res.data.classify;
          }
        })
      },
      translated(show){
          if(show){
            this.$refs.box.style[transform] = `translate3d(-60%,0,0)`
            this.$refs.box.style["transition"] = `all 0.3s`
          }else{
            this.$refs.box.style[transform] = `translate3d(0,0,0)`
            this.$refs.box.style["transition"] = `all 0.3s`
          }

      },
    },
    mounted(){
      this._getWebDate();
    },
    components:{
      HeadCont,
      Nav,
      NavSelect
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    height: 100%;
    .box
      height 100%
      &.navFade-enter-active,&.navFade-leave-active
        transition all  3s
      &.navFade-enter,&.navFade-leave
        transform translate3d(-90%,0,0)
</style>
