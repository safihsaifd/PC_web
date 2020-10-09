<template>
<!-- 主题登陆模块 -->
<div id="login">
    <div class="container content-container my-login">        
        <div class="logon-tab clearfix border-bottom-0 bg-white">
            <router-link to="" class="active">登陆账号</router-link>
            <router-link to="/reg">注册账号</router-link>
        </div>
		<div class="login-border border-top-0 clearfix bg-white">
			<table></table>
            <div class="login-main js-login-main" style="padding: 12px 30px;">
                <div class="login-uid">
                    <p>账号</p>
                    <input type="text" v-model="uname" placeholder="邮箱/用户/手机号">
                </div>
                <div class="login-upwd">
                    <p>密码</p>
                    <input type="password" v-model="upwd" placeholder="请输入密码">
                </div>
                <!-- 记住密码 -->
                <div class="pl-1 pb-4" >
                    <input type="checkbox" name="remember_upwd" v-model="remember">
					<span class="text-muted h7">记住密码</span>
                </div>
                <!-- 登陆按钮 -->
                <div>
                    <button type="button" class="btn btn-success btn-lg btn-block js-btn-login" @click="login">登陆</button>
                </div>
                <!-- 找回密码 -->
                <div class="mbl mt-4 mb-4">
                    <router-link to="" class="text-success">找回密码</router-link>
                    <span class="text-muted">&nbsp;|&nbsp;</span>
                    <span class="text-muted">还没注册账号？</span>
                    <router-link to="/reg" class="text-success">立即注册</router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style>
/* 头部登录注册<a>样式 */
.logon-tab{
	margin: 0 auto;
	margin-top: 80px;
	border: 1px solid #e4ecf3;
}
.logon-tab>a{
	display: block;
	padding: 15px;
	float: left;
	width: 50%;
	text-align: center;
	color: #616161;
	text-decoration: none;
	background-color:#f5f5f5;
}
.logon-tab>a.active{
	background-color:transparent;
	color: #222;
	font-size: 18px;
}
/*登录框架 */
.login-border{
    padding: 0 15px 15px;
    margin: 50px auto;
	margin-top: 0px;
    border: 1px solid #e4ecf3;
}
/* 账号密码输入样式 */
.login-uid,.login-upwd{margin-bottom: 20px;}
.login-uid>p,.login-upwd>p{
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 14px;
    color: #717171;
}
.login-uid>input,.login-upwd>input{
    border: 2px solid #39e08a;
    color: #616161;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 14px;
    width: 100%;
}
/* 登录按钮样式 */
.btn{
    font-size: 14px;
    padding: 12px 35px;
    border-radius:0.3rem;
    line-height: 1.5;  
}
@media (min-width:576px){
    .logon-tab{width: 100%;}
	.login-border{width: 100%;}
	.content-container{
	max-width: 1280px;
	padding: 0 10px;
	height: 524px;
	}
}
@media (min-width:768px){
    .logon-tab{width: 460px;}
    .login-border{width: 460px;}
	.content-container{margin: 30px auto;}
}    
</style>
<script>
export default {
    data() {
        return {
            uname:"",
            upwd:"",
            remember:true,
        }
    },
    methods: {
        login(){
            this.axios.post(
            "/login",
            `uname=${this.uname}&upwd=${this.upwd}`
            ).then(result=>{
                if(result.data!=0){
                    alert('欢迎登录');
                    localStorage.setItem('userlist',JSON.stringify(result.data.result));// 使用json字符串进行数据格式存取
                    this.$router.push("/");
                    location.reload();
			    }else{
				    alert("账号密码错误或重新注册账号");
			    }
            })
        }
    },
}
</script>