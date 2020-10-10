<template>
  <div id="certify">
    <div class="swiper-container button-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="img/certify012.png"></div>
        <div class="swiper-slide"><img src="img/certify013.png"></div>
        <div class="swiper-slide"><img src="img/certify014.jpg"></div>
        <div class="swiper-slide"><img src="img/certify015.jpg"></div>
        <div class="swiper-slide"><img src="img/certify016.jpg"></div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/swiper.min.css' //组件引入swiper 样式
import 'swiper/swiper.min.js'
import VueAwesomeswiper from 'vue-awesome-swiper' // 组件样式
export default {
  data() {
    return {
      lunbodata2:[],
    }
  },
  methods:{
      get(){//获取图片数据
          this.axios.get("/getlun2").then(res=>{
              console.log(res.data.result);
              let data = res.data.result;
              //给图片重新命名
              data.forEach(item=>{
                  if(item.pic!= null){
                      item.pic = require("../assets/lunbo/" + item.pic);
                  }
                  this.lunbodata2.push(item);
              })         
          })
      },
  },
  mounted(){
    this.get(),
    new Swiper('#certify .button-swiper', {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopedSlides: 5,
        autoplay:{
          delay:1000,  // 1秒时长切换
          //如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
          //如果设置为true 如拖动、点击、触碰后，自动切换将会停止
          disableOnInteraction:false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          // clickable :true,
        },
        on: {
          progress: function(progress) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i);
              var slideProgress = this.slides[i].progress;
              var modify = 1;
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
              }
              var translate = slideProgress * modify * 260 + 'px';
              var scale = 1 - Math.abs(slideProgress) / 5;
              var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
              slide.transform('translateX(' + translate + ') scale(' + scale + ')');
              slide.css('zIndex', zIndex);
              slide.css('opacity', 1);
              if (Math.abs(slideProgress) > 3) {
                slide.css('opacity', 0);
              }
            }
          },
          setTransition: function(transition) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i)
              slide.transition(transition);
            }
          }
        }
    })
  },
}
</script>
<style>
#certify {
	position: relative;
	width: 1200px;
	margin: 0 auto
}
#certify  .swiper-slide {
	width: 520px;
	height: 100%;
	box-shadow: 0 8px 30px #ddd;
}
#certify  .swiper-slide img{
	display:block;
}
#certify .swiper-pagination {
	width: 100%;
	bottom: 20px;
}
#certify .swiper-pagination-bullets .swiper-pagination-bullet {
	margin: 0 5px;
	border: 3px solid #fff;
	background-color: #d5d5d5;
	width: 10px;
	height: 10px;
	opacity: 1;
}
#certify .swiper-button-prev {
	left: -30px;
	width: 45px;
	height: 45px;
  background: url(../../public/img/wm_button_icon.png) no-repeat;
  z-index: 100;
	background-position: 0 0;
  background-size: 100%;
  color: transparent;
}
#certify .swiper-button-prev:hover {
	background-position: 0 -46px;
	background-size: 100%
}
#certify .swiper-button-next {
	right: -30px;
	width: 45px;
  height: 45px;
   z-index: 100;
	background: url(../../public/img/wm_button_icon.png) no-repeat;
	background-position: 0 -93px;
  background-size: 100%;
  color: transparent;
}
#certify .swiper-button-next:hover {
	background-position: 0 -139px;
	background-size: 100%
}
</style>