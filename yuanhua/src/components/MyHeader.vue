<template>
    <div id="header" class="clearfix" style="border-bottom:1px solid whitesmoke;background-color: #fff;">
		<div id="topwidth" class="navbar navbar-expand-md navbar-light w-100"> 
<!-- 折导航栏按钮 -->
			<button class="navbar-toggler" data-toggle="collapse" data-target="#listmenu">
			    <span class="navbar-toggler-icon"></span>
			</button>
<!-- 标题图 -->
			<router-link to="/"><img src="../assets/headfoot/img/logo.png" id="topimg"></router-link>
<!-- 悬浮导航栏 -->
			<div class="avatar d-xs-inline d-md-none mr-2">
				<li class="dropdown list-unstyled">
					<router-link to="" class="menubar"><img src="../assets/headfoot/img/avatar.png"></router-link>
					<ul class="dropdown-menu p-0">
						<li  class="text-center"><router-link to="/login" class="text-dark">登陆</router-link></li>
						<li  class="text-center"><router-link to="/reg" class="text-dark">注册</router-link></li>
					</ul>	
				</li>
			</div>
<!--主导航拦/下拉导航  -->
			<ul id="listmenu" class="list-unstyled collapse navbar-collapse">
			    <li class="nav-item"><router-link to="/" class="nav-link">首页</router-link></li>
			    <li class="nav-item"><router-link to="/course" class="nav-link">教程</router-link></li>
			    <li class="nav-item"><router-link class="nav-link" to="/course">课程</router-link></li>
			    <li class="nav-item"><router-link class="nav-link" to="/">社区</router-link></li>
			    <li class="nav-item"><router-link class="nav-link" to="/">工作&咨询</router-link></li>
			    <li class="nav-item"><router-link class="nav-link" to="/">关于我们</router-link></li>
			</ul>
<!-- 搜索框 -->
			<div id="select" style="display:inline-flex;" class="d-sm-none d-md-inline-flex">
			    <input type="text" placeholder="课程搜索" class="form-control p-0 d-sm-none d-lg-flex" v-model="q" @keyup="tosearch">
			    <router-link :to="{path:'/search',query:{q:this.q}}" class="d-sm-none d-md-inline"><img src="../assets/headfoot/img/bottom.png"></router-link>
			</div>
<!-- 登陆前 登录注册 -->
			<ul id="listlogin" class="list-unstyled d-sm-none d-md-flex" v-if="offlogin==null">
			    <li><router-link to="/login">登陆</router-link></li>
			    <li><router-link to="/reg">注册</router-link></li>
			</ul>
<!-- 登陆后 中心注销 -->
			<ul id="onlistlogin" class="list-unstyled d-sm-none d-md-flex" v-else>
				<li><router-link to="" class="btn cd-btn ml-4">我的学习</router-link></li>
				<li><img src="../assets/headfoot/img/lindang.png" class="ml-4"></li>
				<li class="Dadonlogincenter">
					<img src="../assets/headfoot/img/avatar.png" class="mypic" @click="onlogincenter">
					<div class="onlogincenter" :style={display:show}>
						<div class="mypicname">
							<router-link to=""><img src="../assets/headfoot/img/avatar.png"></router-link>
							<span class="userid">{{this.offlogin.uname}}</span>
						</div>
						<div class="twobutton">
							<router-link to="/mycenter">
								<img src="../assets/headfoot/img/luosi.png">
								<span class="ml-1">个人中心</span>
							</router-link>
							<span class="ml-3 text-muted">|</span>
							<router-link to="" class="ml-3">
								<img src="../assets/headfoot/img/qianbao.png">
								<span class="ml-1">我的学习</span>
							</router-link>
						</div>
						<div class="outlogin">
							<span @click="outlogin">退出登陆</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
<!-- 点击后弹出框 -->
	</div>
</template>
<style>
/* 登陆后 用户中心模块 样式*/
.twobutton{
	margin-top: 20px;margin-left: 33px;
}
.outlogin{
	border-top: 1px solid #e8e8e8;
	margin-top: 15px;
}
.outlogin span:hover{cursor: pointer;}
.outlogin span{
	vertical-align: middle;
	margin-left: 94px;
	font-size: 12px;
	color: rgba(0, 0, 0, .56);
}
.onlogincenter a{
	text-align: center;
	color: rgba(0, 0, 0, .56);
	text-decoration: none;
	font-size: 13px;
}
.Dadonlogincenter{
	position: relative;
}
.onlogincenter{
	height: 200px;width: 250px;
	padding-top: 24px;
	background-color: #fff;
	display: block;
	border: 1px solid #e8e8e8;border-radius: 5px;
	position: absolute;
	right: 10px;top: 50px;
	z-index: 100;
}
.mypicname img{
	height: 80px;width: 80px;
	border-radius: 50%;
	margin-left: 30px;
}
.userid{
	padding: 0px;
	font-size: 18px;
	font-weight: 500;
	color: rgba(0, 0, 0, .88);
	margin-left: 20px;
	margin-right: 40px;
}
/* 登陆后右侧选项样式 */
.cd-btn{
	padding: 5px 10px;
	border: 1px solid #333 !important;
	color:#333;
}
.cd-btn:hover{color: #333;}
.mypic{
	width: 32px;height: 32px;
	border-radius: 50%;
	margin-left: 30px;
}
.mypic:hover{cursor: pointer}
/* 导航栏CSS */
#topwidth{
    max-width: 1160px;
    margin: 0 auto;
    padding: 0;
    height: 56px;
}
#topimg{
    height: 40px;
    width: auto;
    margin: 8px 20px;
    display: block;
	text-align: center;
}
#listmenu{
    z-index: 1;
    padding: 0;margin: 0;
    width: 50%;
}
#listmenu a,#listlogin a{
    color: #666;
    font-size: 14px;
}
#listlogin{
    padding: 0;margin: 0;
    width: 116px;height: 56px;
}
#listlogin li{
    border: 0px;
    padding: 20px 14px;
    line-height: 1;
}
#onlistlogin{
	padding-top: 15px;
}
#select{
    padding-top: 15px;
    margin-bottom: 15px;
    display: flex;
    height: 43px;
    width: 310px;
    position: relative;
}
#select>a>img{
    height: 28px;
    width: 60px;
    margin: 0;
    padding: 0;
    right: 0;
    position: absolute;
}
/* 重绘boot下拉按钮 */
.navbar-toggler{
    padding: 5px 10px;
	font-size: 10px;
    border: 0px;
    float: left;
}
.navbar-toggler-icon{
    height: 20px;
}
/* 悬浮下拉菜单*/
.avatar img{
	height: 32px;
	width: auto;
	border-radius: 50%;
}
.dropdown{
	position: relative;
}
.dropdown-menu li{
	padding:  5px 10px;
}
.dropdown-menu a:hover{
	text-decoration: none;
	color: #FFFFFF !important;
}
.dropdown-menu li:hover{
	background-color: #43bc60;
	transition: .6s ease;
}
 .dropdown:hover .dropdown-menu{
	 position: absolute;
	 display: block;
	 top:30px;
	 left: -130px;
}
@media (min-width: 576px){
	#listmenu a{
		color: #fff;
		border: 1px solid #fff;
		background-color: #000000;
        width: 20%;}
}
@media (min-width: 768px){
	#listmenu li{padding: 20px 0px;}
	#listlogin li{padding: 20px 5px;}
	#listmenu a{
		color: #666;
		border:0;
		background-color:transparent;
		width: 100%;}
    #select{width: 60px;}
}
@media (min-width: 992px){
	#listmenu li{padding: 20px 5px;}
	#listlogin li{padding: 20px 14px;}
	#select{width: 150px;}
}
@media (min-width: 1200px){
	#select{width: 310px;}
}
</style>
<script>
export default {
	data() {
		return {
			offlogin:{},
			show:'none',
			q:""//搜索框内容	
		}
	},
	methods: {
		onlogincenter(){
			if(this.show=='none'){
				this.show='inline-block';
			}else{
				this.show='none';
			}
		},
		outlogin(){
			this.show='none';
			localStorage.removeItem('userlist');  // 移除单个键值
			sessionStorage.clear();// 全部清空缓存 如： 当用户点击退出，应对应 清除 用户数据
			this.$router.push("/");
			location.reload();
		},
		GetLocalData(){
            this.offlogin = JSON.parse(localStorage.getItem('userlist'));
            console.log(this.offlogin);
		},
		tosearch(e){
			if(e.keyCode == 13){
			this.$router.push({path: '/search',query:{q:this.q}});// 注意：使用path时， params 将不可用
			window.location.reload();//搜索后刷新一下页面
			}
		}
	},
	created(){
    	this.GetLocalData()
	},
}
</script>