<template>
   <div class="swiperDiv">
     <swiper :options="swiperOption" ref="mySwiper">
       <!-- slides -->
       <swiper-slide>
         <img src="../../common/img/green1.jpg" alt="">
       </swiper-slide>
       <swiper-slide>
         <img src="../../common/img/green2.jpg" alt="">
       </swiper-slide>
       <swiper-slide>
         <img src="../../common/img/green3.jpg" alt="">
       </swiper-slide>
       <swiper-slide>
         <img src="../../common/img/green4.jpg" alt="">
       </swiper-slide>
       <swiper-slide>
         <img src="../../common/img/green5.jpg" alt="">
       </swiper-slide>
       <swiper-slide>
         <img src="../../common/img/green6.jpg" alt="">
       </swiper-slide>
       <!-- Optional controls -->
       <div class="swiper-pagination"  slot="pagination"></div>
       <div class="swiper-button-prev" slot="button-prev"></div>
       <div class="swiper-button-next" slot="button-next"></div>
       <div class="swiper-scrollbar"   slot="scrollbar"></div>
     </swiper>
     <ul class="intro intro1">
       <li class="icon-data">2014年攻读硕士</li>
       <li class="icon-data">2014年努力学习</li>
       <li class="icon-data">2014年可逆图像水印入门学习</li>
       <li class="icon-data">2014年迷迷糊糊</li>
     </ul>
     <ul class="intro ">
       <li class="icon-data">2015年去顺德实习</li>
       <li class="icon-data">2015年遇到爱情</li>
       <li class="icon-data">2015年我恋爱了</li>
       <li class="icon-data">2015年恋爱的辛酸苦辣</li>
     </ul>
     <ul class="intro ">
       <li class="icon-data">2017年写硕士毕业论文</li>
       <li class="icon-data">2017年初入社会</li>
       <li class="icon-data">2017年被骗惨了</li>
     </ul>
     <ul class="intro ">
       <li class="icon-data">2017年硕士毕业</li>
       <li class="icon-data">2017年努力找工作</li>
       <li class="icon-data">2017年前端入门</li>
     </ul>
     <ul class="intro ">
       <li class="icon-data">2017年努力工作</li>
       <li class="icon-data">2017年正式入职前端</li>
       <li class="icon-data">2017年好好学习前端</li>
     </ul>
     <ul class="intro ">
       <li class="icon-data">2017年前景展望</li>
       <li class="icon-data">2017年历史总结</li>
       <li class="icon-data">2017年好好努力</li>
     </ul>
   </div>
</template>
<script type="text/ecmascript-6">
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default{
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          loop:true,
          initialSlide:0,
          effect : 'coverflow',
          slidesPerView: 2,
          centeredSlides: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          on: {
            slideNextTransitionEnd: function () {
              var list = document.getElementsByClassName("intro");
              for(let i=0;i<list.length;i++){
                  list[i].style.display = "none";
              }
              let activeIndex = this.activeIndex;
              if(this.activeIndex == 8){
                activeIndex = 2
              }
              activeIndex = activeIndex - 2;
              list[activeIndex].style.display = "block";
              console.log('this is current swiper instance object', this.activeIndex,activeIndex);
            },
            slidePrevTransitionEnd: function () {
              var list = document.getElementsByClassName("intro");
              for(let i=0;i<list.length;i++) {
                list[i].style.display = "none";
              }
              let activeIndex = this.activeIndex;
              if(this.activeIndex == 1){
                 activeIndex = 7
              }
              activeIndex = activeIndex - 2;
              list[activeIndex].style.display = "block";
              console.log('this is current swiper instance object', this.activeIndex);
            }
          },
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 80,
            modifier: 2,
            slideShadows : false
          },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/style.css'
  .swiperDiv
    min-height 500px
    padding 10px 0 0 0
    img
      width 150px
      height 200px
    .intro
      width 100%
      padding 10px
      box-sizing border-box
      display none
      li
       margin-top 10px
       margin-left 25%
    .intro1
      display block

</style>
