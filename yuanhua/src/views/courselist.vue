<template>
    <div class="container">
<!-- 头部分类栏 -->
        <div>
            <ul id="headul" class="text-muted">
                <li>首页</li>
                <li>/</li>
                <li>{{info.category_name}}</li>
                <li>/</li>
                <li>图文教程</li>
                <li>/</li>
                <li>{{info.title}}</li>
            </ul>
        </div>
<!-- 内容框架 -->
        <div id="main">
            <div class="row no-gutters">
                <div class="col-5 position-relative">
                    <div><img :src="url" class="w-100"></div>
                    <div class="comment">
                        <img src="../../public/img/peopel2.png">
                        <span class="pl-1">{{info.studynum}}</span>
                        <span class="pl-1">人加入学习</span>
                        <div style="display:inline;margin-left:160px">
                            <img src="../../public/img/wjx.png">
                            <img src="../../public/img/wjx.png" class="ml-1">
                            <img src="../../public/img/wjx.png" class="ml-1">
                            <img src="../../public/img/wjx.png" class="ml-1">
                            <img src="../../public/img/wjx.png" class="ml-1">
                            <span class="ml-1">({{info.talknum}}人评价)</span>
                        </div>
                    </div>
                </div>
                <div class="col-7 pl-4 position-relative">
                    <div class="main-title">
                        {{info.title}}
                    </div>
                    <div class="main-price mb-3">
                        <span class="price-left">价格</span>
                        <span class="price-right text-success">{{info.price}}</span>
                    </div>
                    <div class="main-time">
                        <span class="text-muted">学习有效期</span>
                        <span class="ml-5">永久有效</span>
                    </div>
                    <div class="main-foot">
                        <ul>
                            <li>
                                <img src="../../public/img/sys.png">
                                <span class="ml-2">扫一扫</span>
                            </li>
                            <li class="ml-3">
                                <img src="../../public/img/share.png">
                                <span class="ml-2">分享</span>
                            </li>
                            <li class="ml-3">
                                <img src="../../public/img/shoucang.png">
                                <span class="ml-2">收藏</span>
                            </li>
                            <li class="foot-btn">
                                <button class="btn btn-success">加入学习</button>
                                <button class="btn btn-success ml-1">qq咨询</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
<!--  介绍框架-->
        <div class="intr mb-4">
            <div class="row no-gutters">
                <div class="col-8 intr-left">
                    <div style="padding:15px"> 
                        <div>
                            <ul>
                                <li class="link-dark">介绍</li>
                                <li class="link-dark">目录</li>
                                <li class="link-dark">笔记</li>
                                <li class="link-dark">评价</li>
                            </ul>
                        </div>
                        <div>
                            <div>课程介绍</div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div class="col-4 intr-right pl-4">
                    <div class="connection right-border">
                        <div class="right-title">联系方式</div>
                        <div class="mt-2">
                            <img src="../../public/img/qq.png">
                            <span class="pl-2 text-success">原画人插画试听学习</span>
                            <div style="padding-left:32px">群号：338692689</div>
                        </div>
                        <div class="mt-2">
                            <img src="../../public/img/phone.png">
                            <span class="pl-2 text-success">13826688841</span>
                        </div>
                    </div>
                    <div class="teacher right-border">
                        <div class="right-title">授课教师</div>
                        <div class="row no-gutters mt-2">
                            <div class="col-3">
                                <img src="../../public/img/avatar.png" class="w-100 teacher-img">
                            </div>
                            <div class="col-6 pl-4 mt-2">
                                <div>{{info.uname}}</div>
                                <div class="mt-2 text-muted">网页设计</div>
                            </div>
                        </div>
                    </div>
                    <div class="right-border teacher">
                        <div class="right-title">学院动态</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scope>
    /* 顶部ul样式 */
    #headul{
        list-style: none;
        display: flex;
        margin:12px 0;
        padding:8px 0;
    }
    #headul li{
        font-size: 14px;
        margin: 0 4px;
    }
    /* 中间详情样式 */
    #main{
        height: 330px;
        border: 1px solid #e4ecf3;
        padding: 30px 24px;
        margin-bottom: 20px;
        border-radius: 4px;
    }
    .comment{
        position: absolute;
        bottom:15px;
        color: white;
        padding-left: 10px;
        font-size: 14px;
    }
    .main-title{
        margin-bottom: 14px;
        font-size: 18px;
        font-weight: 500;
    }
    .main-price>.price-left{
        margin-right: 12px;
        width: 48px;
        color: #919191;
        font-size: 13px;
        font-weight: 500;
        line-height: 1;
    }
    .main-price>.price-right{
        font-size: 24px;
        font-weight: 700;
    }
    .main-time{
        padding: 16px;
        font-size: 12px;
        background-color:#f5f5f5;
    }
    .main-foot{
        position: absolute;
        bottom: -20px;
    }
    .main-foot>ul{
        list-style: none;
        display: flex;
        margin: 0;
        font-size: 12px;
        color: gray;
        position: relative;
    }
    /* 按钮 */
    .foot-btn{
        position: absolute;
        right: -400px;
        bottom: 0px;
    }
    .foot-btn button{
        padding: 5px 10px;
    }
    /* 介绍框体样式 */
    .intr-left{
        border: 1px solid #e4ecf3;
    }
    .intr-left ul{
        list-style: none;
        display: flex;
        border-bottom: 1px solid #e4ecf3;
        padding-bottom: 10px;
    }
    .intr-left ul li{
        margin-left: 15px;
        color: gray;
    }
    /* 介绍框体右边 */
    .right-border{
        border: 1px solid #e4ecf3;
        border-radius: 5px;
        padding: 10px 15px;
        margin-bottom: 20px;
    }
    .connection{
        height: 162px;
    }
    .teacher{
        height: 140px;
    }
    .right-title{
        border-bottom: 1px solid #e4ecf3;
        padding-bottom: 10px;
    }
    .teacher-img{
        border-radius: 50%;
    }
</style>
<script>
export default {
    data() {
        return {
            info:{},
            url:""
        }
    },
    mounted(){
        /*
        this.$router 路由
        this.$route 路由的请求信息
        */
        //获取地址栏中的id 然后再向服务器发请求
        let uid=this.$route.params.uid;
        this.axios.get("/course?uid=" + uid).then(res=>{
            this.info=res.data.result;
            this.url=require("../assets/course/"+this.info.pic);
        })
    },
}
</script>