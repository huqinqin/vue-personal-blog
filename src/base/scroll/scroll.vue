<template>
    <div class="scroll" ref="scroll">
      <slot></slot>
    </div>
</template>
<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default{
      props:{
          click:{
              type:Boolean,
              default:false
          },
        probeType:{
              type:Number,
              default:1
        },
        listenScroll:{
              type:Boolean,
              default:false
        },
        data:{
              type:Array,
              default:null
        }
      },
      methods:{
          _initScroll(){
             if(!this.$refs.scroll){
                 return
             }
             this.scroll = new BScroll(this.$refs.scroll,{
                 click:this.click,
                 probeType:this.probeType
             });
             if(!this.listenScroll){
                 return
             }
             this.scroll.on('scroll',(pos)=>{
                 let me = this;
                 this.scroll.on("scroll",()=>{
                     me.$emit("scroll",pos);
                 })
             })
          },
          disabled(){
              this.scroll&&this.scroll.disable()
          },
          refresh(){
              this.scroll&&this.scroll.refresh()
          }
      },
    mounted(){
          setTimeout(()=>{
              this._initScroll();
          },20)
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
   .scroll
     height 100%
</style>
