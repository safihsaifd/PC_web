<template>
    <div>
<!--首行大图片-->
        <div class="container-fluid bgpic">
        </div>
        <div class="container my-4 mt-4">
            <ul class="left-ul heade-ul">
                <li class="mr-3"><span>课程</span></li>
                <li><span>班级</span></li>
            </ul>
            <ul class="right-ul heade-ul">
                <li class="mr-3"><span>全部课程</span></li>
                <li class="mr-3"><span>免费课程</span></li>
                <li><span>直播课程</span></li>
            </ul>
        </div>
        <div style="margin-bottom:70px"></div>
        <div class="cd-mb16 container text-muted">
            <span>共找到</span>
            <span class="color-danger phm">{{this.rowcount}}</span>
            <span>门</span>
            <span class="color-danger phm" v-if="this.$route.query.q==0">全部</span>
            <span class="color-danger phm" v-else>{{$route.query.q}}</span>
            <span>相关课程</span>
        </div>
        <div class="container text-center my-5" v-if="course.length==0">
            <span class="text-muted">没有搜索到相关课程,请换个关键词试试</span>
        </div>
<!-- 主题模块 -->
        <div v-else>
            <div class="container p-0">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-6" v-for="(item,index) of course" :key="index">              
                        <div class="course-item" >
                            <div class="course-img">
                                <router-link :to="`/list/${item.uid}`">
                                    <span class="tags">
                                        <span class="tag-coursemark"></span>
                                    </span>
                                    <img v-lazy="item.pic" class="img-responsive">
                                </router-link>
                            </div>
                            <!-- 上面为图片模块 下面为文字模块 -->
                            <div class="course-info">
                                <div class="title">
                                    <router-link :to="`/list/${item.uid}`" class="link-dark" style="font-size:15px;">{{item.title}}</router-link>
                                </div>
                                <div class="metas clearfix">
                                    <span class="num mr-2"><img src="../../public/img/peopel.png" class="mr-1">{{item.studynum}}</span>
                                    <span class="comment text-muted"><img src="../../public/img/comment.png" class="mr-1">{{item.talknum}}</span>
                                    <span class="course-price-widget float-right">
                                        <span class="free">{{item.price}}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<!-- 页脚模块 -->
            <div class="container mb-5 mt-3 p-0">
                <div class="d-flex justify-content-center">
                    <ul class="pagination">
                        <li :class="{active:index==current}" v-for="index in this.pagecount" :key="index" @click="loadMore(index)">
                            <span class='page-link rounded mr-2 text-dark'>{{index}}</span>
                        </li>
                        <li>
                            <span class='page-link rounded mr-2 text-dark'>>|</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* 首航大图片 */
    .bgpic{
        background: url(../../public/img/classes.jpg);
        background-position: center;
        background-size: cover;
        height: 440px;
        padding: 20px 0;
    }
/* 绿色选项栏 */
    .heade-ul{
        list-style: none;
        margin-bottom: 0;
        padding-left: 0;
        display: flex;
    }
    .heade-ul span{
        color: #fff;
        background: #43bc60;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 14px;
        cursor: pointer;
    }
    .left-ul{float: left!important;}
    .right-ul{float: right!important;}
/* ------ */
    .cd-mb16{
        margin-bottom: 16px !important;
    }
    .color-danger{
        color: #ed3e3e !important;
    }
    .phm{
        padding-left: 10px !important;
        padding-right: 10px !important;
    }
/* 页脚模块 */
    .pagination>.active>span{
        opacity: 1;
        background-color: #43bc60;
        border: none;
        color: #fff;
        cursor: default;
    }
    .pagination>li>span{
        background-color: #ececec;
        border: none;
    }
    .pagination>li>span:hover{
        opacity: .8;
        transform: translateY(-1px);
        box-shadow: 0 6px 6px 0 rgba(0, 0, 0, .2);
        transition: all .3s ease
    }
/* 主题模块浮动特效 */
    .course-item:hover{
        transform: translateY(-6px);
        box-shadow: 0 26px 40px -24px rgba(0, 36, 100, .3);
        transition: all .3s ease;
        text-decoration: none;
    }
/* 课程模块样式 */
    .course-item{
        margin-bottom: 30px;
        border-radius: 4px;
        border: 1px solid #e4ecf3;
        background-color: #fff;
    }
    .course-img{
        position: relative;
        overflow: hidden;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
    .tags{
        position: absolute;
        top: 0;
        left: 10px;
    }
    .tag-coursemark{
        width: 40px;height: 50px;
        display: inline-block;
        background: url(../../public/img/tag.png) no-repeat;
    }
    .img-responsive{
        width: 100%;padding: 10px;
    }
    .title{
        margin-top: 10px;
        padding: 0 10px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    }
    .free{
        color: #43bc60;
    }
    .course-list .course-item:hover{
        transform: translateY(-6px);
        box-shadow: 0 26px 40px -24px rgba(0, 36, 100, .3);
        transition: all .3s ease
    }
</style>
<script>
export default {
    data() {
        return {
            course:[],//存储文章详细信息
            page:1,//标识页码的初始值
            pagecount:0,//存储某一分类下文章总页数
            current:0,//标识页脚css
            rowcount:""//获取总记录数
        }
    },
    methods: {
        getcourse(q,page){
            this.course=[];
            this.axios.get(`/search?q=` + q + `&page=` + page).then(res=>{
                //获取后台返回的全部数据
                let data = res.data.results;
                this.pagecount=res.data.pagecount;
                //将服务器返回的总页数赋值给pagecount变量
                this.rowcount = res.data.rowcount;
                //给图片重新命名
                data.forEach(item=>{
                    if(item.pic!= null){
                        item.pic = require("../assets/course/" + item.pic);
                    }
                    this.course.push(item);
                }) 
            })
        },
        //点击全部时，加载所有课程
        loadAll(page){
            this.course=[];
            this.axios.get(`/all?page=` + page).then(res=>{
                //获取后台返回的全部数据
                let data = res.data.results; 
                //将服务器返回的总页数赋值给pagecount变量
                this.pagecount = res.data.pagecount;
                //将服务器返回的总页数赋值给pagecount变量
                this.rowcount = res.data.rowcount;
                //给图片重新命名
                data.forEach(item=>{
                    if(item.pic!= null){
                        item.pic = require("../assets/course/" + item.pic);
                    }
                    this.course.push(item);
                }) 
            })
        },
        //点击页码时,加载更多课程
        loadMore(index){
            //页码进行累加
            this.page=index;
            //给页脚添加active标识符
            this.current=index;
            //获取地址栏q
            let q=this.$route.query.q;
            if(this.page<=this.pagecount){
                if(q==0){
                    this.loadAll(this.page);
                }else{
                    this.getcourse(q,this.page);
                }
            }
        },
        search(){
            let q=this.$route.query.q;
            if(q==0){
                this.loadAll(this.page);
            }else{
                this.getcourse(q,this.page);
            }
        }
    },
   mounted() {
        this.search();
   },
}
</script>
    