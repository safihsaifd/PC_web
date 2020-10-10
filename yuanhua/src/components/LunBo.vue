<template>
  <div class="container clearfix" style="max-width: 1260px;">
    <div class="swiper-container top-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) of lunbodata" :key="index">
            <img :src="item.pic" class="w-100">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper/swiper-bundle.js'
export default {
    data() {
        return {
            lunbodata:[],
        }
    },
    methods: {
        carouselScroll(){
                let mySwiper = new Swiper(".top-container",{
                    autoplay:{
                        disableOnInteraction:false,
                    },
                    slidesPerView: 1,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                });
            },
    },
    mounted() {
        this.axios.get("/getlun").then(res=>{
            let data = res.data.result;
            //给图片重新命名
            data.forEach(item=>{
                if(item.pic!= null){
                    item.pic = require("../assets/lunbo/" + item.pic);
                }
                this.lunbodata.push(item);
            });
            this.$nextTick(function () {  //l轮播图初始化函数carouselScroll一定要放在$nextTick回调中执行
                this.carouselScroll();
            }) 
        })
    },
}
</script>