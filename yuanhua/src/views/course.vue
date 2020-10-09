<template>
    <div>
<!--首行大图片-->
        <div class="container-fluid p-0">
            <div><img src="img/aboutbg.jpg" class="w-100"></div>
        </div>
<!-- 搜索输入框 -->
        <div class="container d-flex justify-content-center">
            <input type="text" class="form-control d-inline-block mt-3 mb-3 text-muted font_small" placeholder="输入关键词搜索" id="input2">
            <div class="d-flex align-self-center searchpic">
                <router-link to="" class="d-sm-none d-md-inline"><img src="img/sousuo.png"></router-link>
            </div>
        </div>
<!-- 虚线分类框 -->
        <div class="container mb-5">
            <ul class="list-group list-unstyled">
                <li class="list-group-item">
                    <span class="font_small text-muted link-dark">所有分类：</span>
                    <router-link to="" class="text-muted p-4 link-dark">{{this.category_name}}</router-link>
                </li>
                <li class="list-group-item py-4 border_top" >
                    <span class="font_small text-muted link-dark">分类:</span>
                    <div class="d-inline-block" style="margin-left:67px;">
                        <span class="font_small text-muted link-dark mr-5" @click="change(item.category_id)"
                        id="chosecourse" v-for="(item,index) of category" :key="index" :class="{green:(index+1)==active}">
                        {{item.category_name}}
                        </span>
                    </div>
                </li>
                <li class="list-group-item border_top">
                    <div class="d-inline-block" style="margin-left: 107px;">
                        <router-link to="" class="font_small mr-5 link-dark">全部</router-link>
                        <router-link to="" class="font_small text-muted mr-5 link-dark">图文教程</router-link>
                        <router-link to="" class="font_small text-muted mr-5 link-dark">大神访问</router-link>
                        <router-link to="" class="font_small text-muted link-dark">视频教程</router-link>
                    </div>
                </li>
            </ul>
        </div>
<!-- 水平导航模块 -->
        <div class="container bg-light p-0 mb-4">
            <ul class="nav nav-sort clearfix">
                <li><router-link to="" class="align-middle d-inline-block" style="height: 40px;">最新</router-link></li>
                <li><router-link to="" class="align-middle d-inline-block" style="height: 40px;">最热</router-link></li>
                <li><router-link to="" class="align-middle d-inline-block" style="height: 40px;">推荐</router-link></li>
            </ul>
        </div>
<!-- 主题模块 -->
        <div class="container p-0">
            <div class="row">
                <div class="col-xl-3 col-lg-4 col-md-6" v-for="(item,index) of course" :key="index">              
                    <div class="course-item" >
                        <div class="course-img">
                            <router-link :to="`/list/${item.uid}`">
                                <span class="tags">
                                    <span class="tag-coursemark"></span>
                                </span>
                                <img :src="item.pic" class="img-responsive">
                            </router-link>
                        </div>
                        <!-- 上面为图片模块 下面为文字模块 -->
                        <div class="course-info">
                            <div class="title">
                                <router-link :to="`/list/${item.uid}`" class="link-dark" style="font-size:15px;">{{item.title}}</router-link>
                            </div>
                            <div class="metas clearfix">
                                <span class="num mr-2"><img src="img/peopel.png" class="mr-1">{{item.studynum}}</span>
                                <span class="comment text-muted"><img src="img/comment.png" class="mr-1">{{item.talknum}}</span>
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
</template>
<style>
/* 清楚跳转a标签样式 */
.roulink :hover{
    text-decoration: none !important;
}
/* 第一个输入框样式 */
#input2{
    width: 390px;
    height: 34px;
    padding: 6px 12px;
    border: 2px solid #39e08a;
    position: relative;top: 1px;
}
.searchpic{
    width: 42px;height: 30px;
    background: #eee;
    border-radius: 3px;
    margin-left: 3px;
    padding-left: 13px;
    padding-top: 1px;
}
/* 导航栏上虚线 */
.border_top{
    border-top: 1px dashed #999 !important;;
}
/* 虚线分类框 */
#chosecourse{
    cursor: pointer;
}
.green{
    color:#39e08a !important;
}
/* 水平导航栏模块 */
.nav-sort > li > a {
    height: 40px;
    padding: 10px 15px;
    color: #616161;
    text-decoration: none;
}
.nav-sort > li > a:hover{
    color:  #43bc60;
    transition: all .3s ease
}
.nav-sort > li > a:active{
    color: #fff;
    background-color: #43bc60;
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
</style>
<script>
export default {
    data() {
        return {
            active:"1",
            course:[],//存储文章详细信息
            category:[],//存储文章分类信息
            page:1,//标识页码的初始值
            pagecount:0,//存储某一分类下文章总页数
            category_name:"" ,
            current:0,
        }
    },
    methods: {
        loadData(cid,page){
            //清除之前可保存的文章数据
            this.course=[];
            //向服务器发送请求，以获取当前分类下的第几页的数据
            this.axios.get(`/lists?cid=` + cid + `&page=` + page).then(res=>{
                //获取后台返回的全部数据
                let data = res.data.results;
                console.log(res.data.results);
                //将服务器返回的总页数赋值给pagecount变量
                this.pagecount = res.data.pagecount;
                //给图片重新命名
                data.forEach(item=>{
                    if(item.pic!= null){
                        item.pic = require("../assets/course/" + item.pic);
                    }
                    this.course.push(item);
                })
                //把返回的数据存入course数组
                this.category_name=res.data.results[0].category_name;   
            })
        },
        loadMore(index){
            //页码进行累加
            this.page=index;
            //给页脚添加active标识符
            this.current=index;
            if(this.page<=this.pagecount){
                if(this.active=="1"){
                    this.loadAll(this.page);
                }else{
                    this.loadData(this.active,this.page);
                }
            }
        },
        loadAll(page){
            this.course=[];
            this.axios.get(`/all?page=` + page).then(res=>{
                //获取后台返回的全部数据
                let data = res.data.results; 
                //将服务器返回的总页数赋值给pagecount变量
                this.pagecount = res.data.pagecount;
                //给图片重新命名
                data.forEach(item=>{
                    if(item.pic!= null){
                        item.pic = require("../assets/course/" + item.pic);
                    }
                    this.course.push(item);
                }) 
                this.category_name="全部";
            })
        },
        //点击变化active的值
        change(obj){
            this.active=obj;          
        }
    },
    watch: {
        active(){
            //清除之前可保存的文章数据
            this.course=[];
            //保证切换选项卡后要显示当前分类的第1页的数据
            this.page = 1;
            if(this.active=="1"){
                this.loadAll(this.page);
            }else{
                this.loadData(this.active,this.page);
            }
        }
    },
    mounted() {
        // 获取文章分类信息
        this.axios.get('/category').then(res=>{
            //接收服务器返回数据并且赋值给属性category
            this.category = res.data.results;
        });
        //获取默认文章分类下的文章数据,本次调用有且只有一次
        this.loadAll(this.page);
    },
}
</script>