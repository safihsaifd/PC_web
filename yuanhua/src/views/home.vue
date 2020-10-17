<template>
    <div>
        <lunbo></lunbo>
<!--小屏导航栏-->
        <div class="container clearfix sm_input d-md-none">
			<input type="text" placeholder="课程搜索" class="float-left form-control">
			<router-link to="/" class="float-right"><img src="img/bottom.png"></router-link>
		</div>
<!--小屏菜单-->
        <div class="nav-for-mobile d-md-none d-flex justify-content-center" style="margin: 0 auto;">
			<ul>
				<li>
					<router-link to="/">
						<img src="img/sm1.png" width="30px auto" class="mb-1">
						<p class="text-muted font_small mb-2 link-dark">首页</p>
					</router-link>
				</li>
				<li>
					<router-link to="/course">
						<img src="img/sm2.png" width="30px auto" class="mb-1">
						<p class="text-muted font_small mb-2 link-dark">教程</p>
					</router-link>
				</li>
				<li>
					<router-link to="/course">
						<img src="img/sm3.png" width="30px auto" class="mb-1">
						<p class="text-muted font_small mb-2 link-dark">课程</p>
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<img src="img/sm4.png" width="30px auto" class="mb-1">
						<p class="text-muted font_small mb-2 link-dark">社区</p>
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<img src="img/sm5.png" width="30px auto" class="mb-1">
						<p class="text-muted font_small mb-2 link-dark">工作咨询</p>
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<img src="img/sm6.png" width="30px auto" class="mb-1">
						<p class="text-muted font_small mb-2 link-dark">关于我们</p>
					</router-link>
				</li>
			</ul>
		</div>
<!-- 推荐老师模块 -->
        <div style="padding-bottom: 20px;">
            <div class="container">
                <div class="text-line">
                    <h2>
                        <span style="color:black;">推荐老师</span>
                        <hr class="hr1"><hr class="hr2">
                    </h2>
                </div>
                <div class="section-more-btn">
                    <router-link to="/" style="color: black;">更多老师推荐作品 >></router-link>
                </div>
                <div class="row clearfix">
                    <table></table>
                    <div class="col-md-3 col-sm-6">
                        <div class="teacher-item">
                            <div class="teacher-top">
                                <table>	</table>
                                <router-link to="/" class="teacher-img"><img src="img/teacher1.jpg" class="avatar-lg"></router-link>
                                <router-link to="/" class="link-dark">Mango芒果猫老师</router-link>
                                <div class="position">暂无头衔</div>
                            </div>
                            <div class="teacher-bottom clearfix">
                                <table></table>
                                <div class="about">	
                                大家好，我是芒果猫，专攻日系美宣，参加过的游戏项目有...									
                                </div>
                            </div>		
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="teacher-item">
                            <div class="teacher-top">
                                <table>	</table>
                                <router-link to="/" class="teacher-img"><img src="img/teacher2.jpg" class="avatar-lg"></router-link>
                                <router-link to="/" class="link-dark">唐月辉老师</router-link>
                                <div class="position">角色原画班讲师</div>
                            </div>
                            <div class="teacher-bottom clearfix">
                                <table>	</table>
                                <div class="about">	
                                做插图和培训行业十年有余，有口碑,也有相对实力,入行多...									
                                </div>
                            </div>		
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="teacher-item">
                            <div class="teacher-top">
                                <table>	</table>
                                <router-link to="/" class="teacher-img"><img src="img/teacher3.jpg" class="avatar-lg"></router-link>
                                <router-link to="/" class="link-dark">时若可止老师</router-link>
                                <div class="position">插画基础班讲师</div>
                            </div>
                            <div class="teacher-bottom clearfix">
                                <table></table>
                                <div class="about">								
                                    大家好,我是时若可止,擅长日系风的插画师,曾参与多个插画项目...									
                                </div>
                            </div>		
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="teacher-item">
                            <div class="teacher-top">
                                <table>	</table>
                                <router-link to="/" class="teacher-img"><img src="img/teacher4.jpg" class="avatar-lg"></router-link>
                                <router-link to="/" class="link-dark">重渡老师</router-link>
                                <div class="position">绘画进阶班讲师</div>
                            </div>
                            <div class="teacher-bottom clearfix">
                                <table>	</table>
                                <div class="about">																		
                                    擅长角色设计，横版海报和宣传立绘，曾参与多个游戏如《英...								
                                </div>
                            </div>		
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!-- 学生作品模块 -->
        <div class="recommend-students">
            <div class="container" style="max-width: 1280px;">
                <table></table>
                <div class="text-line"> 
                    <h2>
                        <span>学生作品</span>
                        <hr class="hr1" style="background-color: #fff;"><hr class="hr2">
                    </h2>	
                </div>
                <div class="section-more-btn">
                    <router-link to="/" style="color: #fff">查看更多学员作品 >></router-link>
                </div>
                <div class="row work-con ">
                    <table></table>
                    <div class="col-md-12" style="margin: 15px 0;">
                        <img src="img/works05.jpg"  alt="原画人优秀学员作品">
                    </div>
                    <div class="col-md-5 col-sm-5">
                        <div class="row no-gutters" id="row-pic-2">
                            <table></table>
                            <div class="col-md-12"><img src="img/works01.jpg" alt="原画人优秀学员作品"></div>
                            <div class="col-md-12"><img src="img/works02.jpg" alt="原画人优秀学员作品"></div>
                            <div class="col-md-12"><img src="img/works03.jpg" alt="原画人优秀学员作品"></div>	
                        </div>
                    </div>
                    <div class="col-md-7 col-sm-7">
                        <div class="row" id="row-pic-3">
                            <table></table>
                            <div class="col-md-12"><img src="img/works04.jpg" alt="原画人优秀学员作品"></div>
                            <div class="col-md-12"><img src="img/works06.jpg" alt="原画人优秀学员作品"></div>
                            <div class="col-md-12"><img src="img/works07.jpg" alt="原画人优秀学员作品"></div>
                            <div class="col-md-12"><img src="img/works08.jpg" alt="原画人优秀学员作品"></div>
                            <div class="col-md-12"><img src="img/works09.jpg" alt="原画人优秀学员作品"></div>	
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!--推荐教程模块  -->
        <div class="dynamic-section" style="background: #f5f8fa;">
            <div class="container clearfix" style="max-width: 1280px;background: #f5f8fa;">
                <!-- 标题 -->
                <div class="text-line">
                    <h2>
                        <span style="color: #313131">推荐教程</span>
                        <hr class="hr1"><hr class="hr2">
                    </h2>
                </div>
                <!-- 查看更多超链接 -->
                <div class="section-more-btn">
                    <router-link to="/" style="color: #616161;">查看更多 >></router-link>
                </div>
                <!-- 主体模块 -->
                <div class="course-list row">
                    <table></table>
                    <div class="col-md-3 col-sm-6" v-for="(item,index) of teach.slice(0,4)" :key="index">
                        <div class="course-item">
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
                                    <span class="num mr-2"><img src="img/peopel.png" class="mr-1">{{item.studynum}}</span>
                                    <span class="comment"><img src="img/comment.png" class="mr-1">{{item.talknum}}</span>
                                    <span class="course-price-widget float-right">
                                        <span class="free">{{item.price}}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!-- 社区咨询模块 --> 
        <div class="class-section">
            <div class="container clearfix" style="max-width: 1280px;">
                <table></table>
                <div class="text-line gray">
                    <h2>
                        <span style="color: #313131">社区咨询</span>
                        <hr class="hr1"><hr class="hr2">
                    </h2>
                </div>
                <div class="section-more-btn">
                    <router-link to="/" style="color: #616161;">查看更多 >></router-link>
                </div>
                <div class="row no-gutters clearfix">
                    <table></table>
                    <div class="col-md-12">
                        <div class="panel-body row">
                            <table></table>
                            <div class="col-sm-4 col-xs-12">
                                <div class="innerdiv">
                                    <div class="media-left">
                                        <router-link to="/"><img src="img/socialpic1.jpg" alt="VIP专属" class="w-100"></router-link>
                                    </div>
                                    <div class="media-body" data-vip="1">
                                        <div class="title">
                                            <router-link to="/" class="link-dark">VIP专属</router-link>
                                        </div>
                                        <div class="metas p-0 m-1">
                                            <span class="num mr-2"><img src="img/peopel.png" class="mr-1">62</span>
                                            <span class="comment"><img src="img/comment.png" class="mr-1">78</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-xs-12">
                                <div class="innerdiv">
                                    <div class="media-left">
                                        <router-link to="/"><img src="img/socialpic2.jpg" alt="VIP专属" class="w-100"></router-link>
                                    </div>
                                    <div class="media-body" data-vip="0">
                                        <div class="title">
                                            <router-link to="" class="link-dark">为我加油</router-link>
                                        </div>
                                        <div class="metas p-0 m-1">
                                            <span class="num mr-2"><img src="img/peopel.png" class="mr-1">231</span>
                                            <span class="comment"><img src="img/comment.png" class="mr-1">123</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-xs-12">
                                <div class="innerdiv">
                                    <div class="media-left">
                                        <router-link to="/"><img src="img/socialpic3.png" alt="VIP专属" class="w-100"></router-link>
                                    </div>
                                    <div class="media-body" data-vip="0">
                                        <div class="title">
                                            <router-link to="/" class="link-dark">学院故事</router-link>
                                        </div>
                                        <div class="metas p-0 m-1">
                                            <span class="num mr-2"><img src="img/peopel.png" class="mr-1">156</span>
                                            <span class="comment"><img src="img/comment.png" class="mr-1">38</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!-- DIV介绍模块 -->
        <div class="introduction-section">
            <div class="container">
                <table></table>
                <div class="text-line pt-5">
                    <h2>
                        <span style="color: #fff">DIV自定义模板</span>
                        <hr class="hr1"><hr class="hr2">
                    </h2>
                    <div class="section-more-btn">
                        <router-link to="/" style="color: #fff;">查看更多 >></router-link>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 introduction-item w-100 float-left">
                        <div class="media">
                            <div class="media-body">
                                <h3 class="title">
                                    <span style="color:#fff;font-weight:bold;">【成都】WEB-学习Web前端-这是首页</span>
                                </h3>
                                <div style="padding-left: 10px;font-size:16px;">
                                    <span style="color:#fff;">邮箱：873877941@qq.comqq：873877941</span>
                                </div>
                            </div>
                        </div>
                        <div class="media">
                            <div class="media-body">
                                <h3 class="title">
                                    <span style="color:#fff;font-weight:bold;">【成都】WEB-学习Web前端-这是首页</span>
                                </h3>
                                <div style="padding-left: 10px;font-size:16px;">
                                    <span style="color:#fff;">我有那么多遗憾那么多期盼你知道吗</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 introduction-item w-100 float-left">
                        <div class="media">
                            <div class="media-body">
                                <h3 class="title">
                                    <span style="color:#fff;font-weight:bold;">【北京】WEB-学习Web前端-这是首页</span>
                                </h3>
                                <div style="padding-left: 10px;font-size:16px;">
                                    <span style="color:#fff;">
                                        医院鬼话 一位医生在做完急诊后已是午夜，正准备回家。走到电梯门口，见一女护士，便一同乘电梯下楼，可电梯到了一楼还不停，一直向下。到B3时，门开了，电梯门开了，一个小女孩出现在他们眼前，低着头说要搭电梯。医生见状急忙关上电梯门
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="media">
                            <div class="media-body">
                                <h3 class="title">
                                    <span style="color:#fff;font-weight:bold;">【成都】WEB-学习Web前端-这是首页</span>
                                </h3>
                                <div style="padding-left: 10px;font-size:16px;">
                                    <span style="color:#fff;">
                                        护士奇怪地问：“为什么不让她上来。”医生说：“B3是我们医院的停尸房，医院给每个尸体的右手都绑了一根红丝带，她的右手，他的右手有一根红丝带……”护士听了，渐渐伸出右手，阴笑一声说：“是不是……这样的一根红绳啊？
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!-- 介绍轮播图模块 -->
        <div class="container" style="margin-bottom: 50px;max-width: 1280px;">
            <table></table>
            <div class="text-line d-sm-none d-md-block">
                <h2>
                    <span style="color:#000;">为什么偏偏选择我们</span>
                </h2>
            </div>
            <div class="swiper-container">
                <div class="row">
                    <div class="d-sm-none d-md-block col-md-4">
                        <div class="carousel light1">
                            <div class="carousel-inner" data-ride="carousel">
                                <div class="carousel-item active"><img src="img/81.png" class="w-100"></div>
                                <div class="carousel-item"><img src="img/82.png" class="w-100"></div>
                                <div class="carousel-item"><img src="img/83.png" class="w-100"></div>
                            </div>
                        </div>
                    </div>
                    <div class="d-sm-none d-md-block col-md-4">
                        <div class="carousel light1">
                            <div class="carousel-inner" data-ride="carousel">
                                <div class="carousel-item active"><img src="img/82.png" class="w-100"></div>
                                <div class="carousel-item"><img src="img/83.png" class="w-100"></div>
                                <div class="carousel-item"><img src="img/81.png" class="w-100"></div>
                            </div>
                        </div>
                    </div>
                    <div class="d-sm-none d-md-block col-md-4">
                        <div class="carousel light1">
                            <div class="carousel-inner" data-ride="carousel">
                                <div class="carousel-item active"><img src="img/83.png" class="w-100"></div>
                                <div class="carousel-item"><img src="img/81.png" class="w-100"></div>
                                <div class="carousel-item"><img src="img/82.png" class="w-100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>	
        </div>
<!-- 证书轮播图模块 -->
        <div class="container" style="max-width: 1280px;margin-bottom: 50px;">
            <table></table>
            <div class="text-line">
                <h2>
                    <span style="color:#000;">来自业界的认可</span>
                    <hr class="hr1"><hr class="hr2">
                </h2>
            </div>
            <lunbo2></lunbo2>
        </div>        
<!-- 外部链接模块 -->
        <div class="es-friend-link">
            <div class="container">
                <table></table>
                <div class="title float-left m-0">友情链接：</div>
                <ul>
                    <li>
                        <router-link to="https://www.cgjoy.com/" class="link-dark text-sm">CGJOY论坛</router-link>
                    </li>
                    <li>
                        <router-link to="http://www.hkcgart.com/index/index.html" class="link-dark text-sm">花魁小站</router-link>
                    </li>
                    <li>
                        <router-link to="https://www.cger.com" class="link-dark text-sm">CGer</router-link>
                    </li>
                    <li>
                        <router-link to="http://www.cgylw.com/portal.php" class="link-dark text-sm">CG游麟网</router-link>
                    </li>
                    <li>
                        <router-link to="http://www.element3ds.com" class="link-dark text-sm">微元素</router-link>
                    </li>
                    <li>
                        <router-link to="http://iskn.cc" class="link-dark text-sm">实录手绘板</router-link>
                    </li>
                    <li>
                        <router-link to="https://www.lanhucg.com" class="link-dark text-sm">广西实体班</router-link>
                    </li>
                </ul>
            </div>
        </div>               
    </div>
</template>
<style>
/* 小屏输入框 */
.sm_input{
    max-width: 400px;
    margin: 40px auto;
}
.sm_input input{
    border: 1px solid #c1c1c1;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    width: 200px;height: 25px;
    padding: 10px 6px;
}
/* 小屏菜单栏 */
.nav-for-mobile ul{
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
}
.nav-for-mobile ul li{
    list-style-type: none;
    display: inline-block;
    width: 100px;
    padding: 10px 0;
}
.nav-for-mobile ul li a:hover{
    text-decoration: none;
}
/* 第3个模块样式 */
.teacher-item{
    position: relative;
    margin-bottom: 20px;
    text-align: center;
    z-index: 1;
    border-radius: 4px;
    border: 1px solid #e4ecf3;
}
.teacher-top{
    padding: 20px 10px;
    background-color: #f5f8fa;
}
.avatar-lg{
    border: 4px solid #fff;
    width: 120px !important;
    height: 120px !important;
    border-radius: 50%;
    vertical-align: middle;
}
.teacher-top .link-dark{
    height: 22px;
    display: block;
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 10px;
}
.position{
    color: #c1c1c1;
    display: block;
    margin-top:10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: transparent;	
}
.teacher-bottom{
    height: 90px;
}
.about{
    margin-top: 20px;
    padding: 0 10px;
    line-height: 25px;
    overflow: hidden;
    color: #919191;
    opacity: 1;
}
/* 第四个模块样式 */
.recommend-students{
    background: url(../../public/img/bg.jpg);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size:100% ;
}
.recommend-students img{
    width: 100%;
    vertical-align: middle;
    border: 0;
}
.recommend-students img:hover{
    transition: ease .6s;
    transform: scale(1.05);
}
.work-con{
    padding-bottom: 50px;
}
#row-pic-2>div{
    border: 0px;
    margin: 12px 0px;
    padding: 0 11px;
    background: transparent;
}
#row-pic-3>div{
    border: 0px;
    padding: 0px;
    margin: 15px ;
    background: transparent;
}
/* 第5个模块样式 */
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
/* 第6个模块样式 */
.class-section{
    padding-bottom: 10px;
    background-color: #fff;
}
.panel-body{padding: 15px 0;}
.panel-body>div{padding: 10px;}
.innerdiv{
    box-shadow: 0 0 5px 5px #eee;
    border-radius: 5px;
}
.media-body .title{
    margin: 15px 10px -3px;
    height: 20px;
    padding: 0px;
    font-size: 15px;
    overflow: hidden;
}
.media-left{
    height: 370px;
    overflow: hidden;
    display: block;
}
.media-left img:hover{
    transform:scale(1.1,1.1) rotate(5deg);
    transition: ease .6s;
}
/* 第7个模块样式 */
.introduction-section{
    position: relative;
    background-color: raba(0,0,0,1);
    background-image: url(../../public/img/job.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 30px;
}
.introduction-section .introduction-item{
    margin: 30px 0 45px;
    text-align: center;
    /* vertical-align: top; */
    display: block;
    color: #fff;
    padding: 30px;
    border: 1px solid #53b683;
    border-radius: 7px;
    box-shadow: 0 0 14px 3px #53b683;
}
.introduction-section .introduction-item:hover {
    box-shadow:0px 0px 8px 5px #53b683;
}
.introduction-section .title{
    margin: 20px 0;
    font-size: 18px;
}
/* 第8个模块样式 */
.swiper-container{
    width: 100%;height: 100%;margin-top: 30px;
}
.light1:hover{
    box-shadow:0px 0px 15px 4px #53b683;
    transition: ease .3s;
}
/* 第9个模块重写轮播图箭头 */
.carousel-control-prev,
.carousel-control-next{
    width: 6%;height: 20%;
    background-color: #aaa;
    border-radius: 0.25rem;
    top: 40%;
}
.carousel-control-prev{left:-40px;}
.carousel-control-next{right:-40px;}
/* 第10个模块样式 */
.es-friend-link{
    border-top: 1px solid #e1e8ed;
    background-color: #f5f8fa;
    padding: 20px 0;
}
.text-sm{
    font-size: 12px !important;
}
.es-friend-link ul{
    padding-left: 50px;
    margin-bottom: 0px;
    display: flex;
    justify-content: space-between;
    list-style: none;
}
</style>
<script>
export default {
    data() {
        return {
            teach:[],
        }
    },
    methods: {
        getteach(){//获取图片数据
            this.axios.get("/teach").then(res=>{
                let data=res.data.result;
                //给图片重新命名
                data.forEach(item=>{
                    if(item.pic!= null){
                        item.pic = require("../assets/course/" + item.pic);
                    }
                    this.teach.push(item);
                })
            })
        },
    },
    mounted() {
        this.getteach();
    },
}
</script>