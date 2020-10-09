<template>
	<div class="es-footer-link">
		<div class="container" style="max-width: 1280px;">
			<div class="row">
				<table></table>
				<div class="col-md-8 foot-main clearfix">
					<div class="row no-gutters foot_row">
						<div class="col-xs-4" style="margin:0 30px;">
						    <h3>关于我们</h3>
						    <ul>
								<li><router-link to="/">了解我们</router-link></li>
								<li><router-link to="/">联系我们</router-link></li>
								<li><router-link to="/">服务协议</router-link></li>
								<li><router-link to="/">网络地图</router-link></li>
								<li><router-link to="/">XML地图</router-link></li>
							</ul>
						</div>
						<div class="col-xs-4" style="margin:0 30px;">
							<h3>帮助中心</h3>
							<ul>
								<li><router-link to="/">家长指南</router-link></li>
								<li><router-link to="/">使用中心</router-link></li>
								<li><router-link to="/">费用保障</router-link></li>
								<li><router-link to="/">意见反馈</router-link></li>
							</ul>
						</div>
						<div class="col-xs-4" style="margin:0 30px;">
							<h3>平台特色</h3>
							<ul>
								<li><router-link to="/">用户好评</router-link></li>
								<li><router-link to="/">在线平台</router-link></li>
								<li><router-link to="/">教师认证</router-link></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="d-sm-none d-md-block col-md-4 foot-logo" align="center">
					<router-link to="/">
						<img src="../assets/headfoot/img/end.png" alt="建议图片大小为233*64" height="150px">
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
/* 尾部模块CSS */
.es-footer-link{
    background: #2e2e2e;
    padding: 55px 0;
    border-bottom: 1px solid #111;
}
.foot-main h3{
    font-size: 16px;
    color: #eee;
    margin-top: 0;
    margin-bottom: 30px;
}
.foot-main ul{
    padding: 0;
    margin-right: 0;
    list-style-type: none;
}
.foot-main ul li{
    margin-top: 20px;
}
.foot-main ul li a{
    color: #39e08a;
    font-size: 14px;
}
@media screen and (min-width:576px) and (max-width:767.99px){
    .foot_row{
        display: flex;
        justify-content: center;
    }
}
</style>