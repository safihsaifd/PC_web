<template>
  <div class="container clearfix" style="max-width: 1260px;">
    <div class="swiper-container">
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
export default {
    data() {
        return {
            lunbodata:[],
        }
    },
    methods: {
        carouselScroll(){
                let mySwiper = new Swiper(".swiper-container",{
                    loop:true,
                    autoplay: {
                        disableOnInteraction: false,  // 用户操作swiper之后，是否禁止autoplay （没有加入之前轮播图设置 autoplay：true无效）
                        delay: 2000, // 自动切换的时间间隔（单位ms）
                    },
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    observeParents:false, //必须加入
                    observer:true, //必须加入
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