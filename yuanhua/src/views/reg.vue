<template>
<!-- 主体模块 -->
    <div class="container content-container " id="reg">
        <div class="reg-tab clearfix border-bottom-0 bg-white">
            <router-link to="/login">登陆账号</router-link>
            <router-link to="" class="active">注册账号</router-link>
        </div>
        <div class="reg-border border-top-0 clearfix bg-white" id="app">
            <table></table>
            <div class="reg-main js-login-main" style="padding: 12px 30px;">
                <!-- 电话模块 -->
                <div class="reg-phone">
                    <p>手机号码</p>
                    <input type="text" placeholder="请输入你常用的手机号" v-model="phone" @blur="vali_phone" :disabled="isAgree==false">
                    <span>{{phone_msg}}</span><!--焦点移出框-->
                </div>
                <!-- 用户名模块 -->
                <div class="reg-uid">
                    <p>用户名</p>
                    <input type="text" placeholder="中,英文均可，最长18个英文或9个汉字" v-model="uname" @blur="vali_uname" :disabled="isAgree==false">
                    <span>{{uname_msg}}</span><!--焦点移出框-->
                </div>
                <!-- 两次密码模块 -->
                <div class="reg-upwd">
                    <p>密码</p>
                    <input type="password" placeholder="请输入密码，最长16位英文或符号" v-model="pwd" @blur="vali_pwd" :disabled="isAgree==false"> 
                    <span>{{pwd_msg}}</span><!--焦点移出框-->
                </div>
                <div class="reg-upwd">
                    <p>请再次输入密码</p>
                    <input type="password" placeholder="请再次输入密码" v-model="pwd2" @blur="vali_pwd2" :disabled="isAgree==false">
                    <span>{{pwd2_msg}}</span><!--焦点移出框-->
                </div>
                <!-- 性别选择 -->
                <div class="align-middle">
                    <label for="sex">性别：男:</label>
                    <input type="radio" value=1 name="sex" :disabled="isAgree==false" v-model="sex">&nbsp;&nbsp;
                    <label for="sex">女：</label>
                    <input type="radio" value=0 name="sex" :disabled="isAgree==false" v-model="sex">&nbsp;&nbsp;
                    <label for="sex">保密:</label>
                    <input type="radio" value="-1" name="sex" :disabled="isAgree==false" v-model="sex">
                </div>
                <!-- 注册按钮 -->
                <div>
                    <button type="button" class="btn btn-success btn-lg btn-block js-btn-login" @click="reg">同意服务协议并注册</button>
                </div>
                <!-- 服务条款 -->
                <div class="mt-3 text-muted">
                    请详细阅读并同意<a href="#" class="text-success">《用户服务协议》</a>
                    <input type="checkbox" v-model="isAgree">
                </div>
            </div>
        </div>
    </div>  
</template>
<style>
/* 头部登录注册<a>样式 */
.reg-tab{
	margin: 0 auto;
	border: 1px solid #e4ecf3;
}
.reg-tab>a{
	display: block;
	padding: 15px;
	float: left;
	width: 50%;
	text-align: center;
	color: #616161;
	text-decoration: none;
	background-color:#f5f5f5;
}
.reg-tab>a.active{
	background-color:transparent;
	color: #222;
	font-size: 18px;
}
/*注册框架 */
.reg-border{
  padding: 0 15px 15px;
  margin: 0 auto;
	margin-top: -30px;
  border: 1px solid #e4ecf3;
}
/* 账号密码输入样式 */
.reg-uid,.reg-upwd,.reg-phone{margin-bottom: 20px;}
.reg-uid>p,.reg-upwd>p,.reg-phone>p{
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 14px;
    color: #717171;
}
.reg-uid>input,.reg-upwd>input,.reg-phone>input{
    border: 2px solid #39e08a;
    color: #616161;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 14px;
    width: 100%;
}
/* 注册按钮样式 */
.btn{
    font-size: 14px;
    padding: 12px 35px;
    border-radius:0.3rem;
    line-height: 1.5;  
}
/* 媒体查询 */
@media (min-width:576px){
  .reg-tab{width: 100%;}
	.reg-border{width: 100%;}
	.content-container{
		padding: 0 10px;
		max-width: 1280px;
		height: 680px;
		margin-top: 100px;}
}
@media (min-width:768px){
  .reg-tab{width: 460px;}
  .reg-border{width: 460px;}
	.content-container{
		margin: 90px auto;
		margin-bottom: 150px;
		height: 524px;}
}
</style>
<script>
export default {
  data() {
    return {
      phone:"",
      uname:"",
      pwd:"",
      pwd2:"",
      sex:1,
      phone_msg:"",
      uname_msg:"",
      pwd_msg:"",
      pwd2_msg:"",
      isAgree:false //开局默认不同意
    }
  },
  methods: {
    reg(){
      this.axios.post(
        "/reg",
      `phone=${this.phone}&uname=${this.uname}&pwd=${this.pwd}&sex=${this.sex}`)
      .then(result=>{
        if(result.data.code==1){
           alert('注册成功');
           this.$router.push("/login")
          }else{
           alert('注册失败或用户名重复');
          }
        })
    },
    vali_phone(){
      var reg=/^1[3-9]\d{9}$/;
      if(reg.test(this.phone)){
          this.phone_msg="√ 手机号格式正确";
        }else{
          this.phone_msg="× 手机号格式不正确";
        }
    },
    vali_uname(){
      var reg=/^[\u4e00-\u9fa5]{1,8}$|^[\dA-Za-z_]{4,16}$/;
        if(reg.test(this.uname)){
          this.uname_msg="√ 用户名格式正确";
        }else{
          this.uname_msg="× 用户名格式不正确";
        }   
    },
    vali_pwd(){
      var reg=/^[0-9A-Za-z]{4,16}$/;
        if(reg.test(this.pwd)){
          this.pwd_msg="√ 密码格式正确";
        }else{
          this.pwd_msg="× 密码格式不正确";
        }
    },
    vali_pwd2(){
      if(this.pwd2==this.pwd && this.pwd2!=""){
        this.pwd2_msg="√ 密码正确";
      }else{
        this.pwd2_msg="× 请与上次密码一致";
      }
    }
  },
}

</script>
