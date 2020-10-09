<template>
    <div class="container my-5 mycenterborder">
        <div class="my-heading">
            <strong>个人中心</strong>
        </div>
        <div class="my-center">
            <div class="row">
                <div class="col-6">
                    <div class="my-pic"><img src="img/avatar.png"></div>
                    <p class="image-upload-tip">请上传jpg, gif, png格式的图片, 建议图片大小不超过2MB</p>
                </div>
                <div class="col-6 my-center-right" style="padding-bottom:30px;">
                    <div class="row">
                        <div class="col-6">用户名:
                            <span class="ml-2" v-html="uname"></span>
                        </div>
                        <div class="col-6">出勤率:</div>
                        <div class="col-6">ID:
                            <span class="ml-2" v-html="uid"></span>
                        </div>
                        <div class="col-6">作业率:</div>
                        <div class="col-6">VIP:
                            <img src="img/notvip.png" style="width:20px;height:20px" class="ml-2">
                        </div>
                        <div class="col-6">团队表现：</div>
                        <div class="col-6">发帖量:
                            <span class="ml-2">0</span>
                        </div>
                        <div class="col-6">综合评级:</div>
                        <div class="col-8">
                            <span>学习意向:</span>
                            <select v-model="selectspan" class="select text-muted">
                                <option value="请输入标签" hidden>请输入标签</option>
                                <option value="基础原画">基础原画</option>
                                <option value="基础插画">基础插画</option>
                                <option value="角色设计">角色设计</option>
                                <option value="场景设计">场景设计</option>
                                <option value="漫画设计">漫画设计</option>
                            </select>
                        </div>
                        <div class="col-4 p-0">(<span style="color:red">学习意向必填</span>)</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-work">
            <div class="row">
                <div class="col-5"></div>
                <div class="col-5 col-offset-1">
                    <img src="img/tiezi.png">
                    <strong class="text-muted ml-1">我的作品</strong>
                    <div class="ispush">
                        未上传个人作品
                    </div>
                </div>
                <div class="col-5"></div>
                <div class="col-5 col-offset-1">
                    <img src="img/huati.png">
                    <strong class="text-muted ml-1">我的帖子</strong>
                    <div class="ispush">
                        暂未发布帖子
                    </div>
                </div>
            </div>
        </div>
        <div class="my-heading">
            <strong>资料完善</strong>
        </div>
        <div class="perfection">
            <div class="row">
                <div class="col-6">
                    <div class="text-muted">真实姓名</div>
                    <input v-model="username" class="perinput" style="width:80%">
                </div>
                <div class="col-6">
                    <div class="text-muted">性别</div>
                    <div class="align-middle">
                        <input type="radio" value=1 name="sex" v-model="sex" class="mr-1">
                        <label for="sex" class="mr-5">男</label>
                        <input type="radio" value=0 name="sex" v-model="sex" class="mr-1">
                        <label for="sex">女</label>
                    </div>
                </div>
                <div class="col-5"></div>
                <div class="col-5 col-offset-1">
                    <div class="text-muted">头衔</div>
                    <input v-model="headname" class="perinput">
                </div>
                <div class="col-5 col-offset-1 ml-5">
                    <div class="text-muted">个人签名</div>
                    <input v-model="autograph" class="perinput">
                </div>
                <div class="col-5"></div>
                <div class="col-12">
                    <div class="text-muted">个人介绍</div>
                    <textarea v-model="introduce" class="perinput-myself"></textarea>
                </div>
                <div class="col-6">
                    <div class="text-muted">公司</div>
                    <input v-model="company" class="perinput" style="width:80%">
                </div>
                <div class="col-6">
                    <div class="text-muted">职业</div>
                    <input v-model="profession" class="perinput">
                </div>
                <div class="col-6">
                    <div class="text-muted">个人空间</div>
                    <input v-model="sapce" class="perinput" style="width:80%" placeholder="http://">
                </div>
                <div class="col-6">
                    <div class="text-muted">微博</div>
                    <input v-model="blog" class="perinput" placeholder="http://">
                </div>
                <div class="col-6">
                    <div class="text-muted">微信</div>
                    <input v-model="wechat" class="perinput" style="width:80%" value="wechat">
                </div>
                <div class="col-6">
                    <div class="text-muted">QQ</div>
                    <input v-model="qq" class="perinput">
                </div>
            </div>
            <button class="btn btn-success p-0 mt-4 preser" @click="pre">保存</button>
        </div>
    </div>
</template>
<style scope>
    /* 父框架边框 */
    .mycenterborder{
        border:1px solid #e3e3e3 ;
        padding-bottom: 30px;
    }
    /* 顶部标题 */
    .my-heading{
        padding: 20px 32px;
        box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, .08);
    }
    /* 个人详情 */
    /* 左 */
    .my-center{
        padding: 30px 25px;
    }
    .my-pic>img{
        width: 124px;height: 124px;
        border: 4px solid #e5e5e5;
        border-radius: 5px;
    }
    .image-upload-tip{
        font-size: 12px;
        line-height: 1;
        margin-top: 10px;
        margin-bottom: 40px;
        color: rgba(0, 0, 0, .32);
    }
    /* 右 */
    .select{
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        width: 200px;
        padding: 3px 8px;
    }
    .my-center-right>.row>div{
        margin: 8px 0;
        color: grey;
        font-size: 14px;
    }
    /* 个人作品 */
    .ispush{
        padding: 35px 0;
        font-size: 14px;
        color: rgba(0, 0, 0, .32);
    }
    /* 资料补充修改 */
    .perfection{
        padding:0px 32px;
        padding-right: 80px;
        font-size: 12px;
    }
    .perfection>.row>div{
        margin-top: 30px;
    }
    .perinput{
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, .32);
        outline: none;
    }
    .perinput-myself{
        width: 100%;
        height: 230px;
        border: 1px solid #e3e3e3;
        outline: none;
    }
    /* 提交按钮 */
    .preser{
        padding: 8px 17px !important;
    }
</style>
<script>
export default {
    data() {
        return {
            userlist:{},
            selectspan:"请输入标签",
            qq:'',/*QQ*/
            username:"",/*真实姓名*/
            sex:'',/*性别*/
            headname:'',/*头衔*/
            autograph:'',/*个人签名*/
            introduce:'',/*个人介绍*/
            company:'',//公司
            profession:"",//职业
            sapce:'',//个人空间
            blog:'',//博客
            wechat:'',//微信
            uid:'',//ID
            uname:''//账号名
        }
    },
    methods: {
        GetLocalData(){
            this.userlist = JSON.parse(localStorage.getItem('userlist'));
            console.log(this.userlist);
        },
        pre(){
            this.axios.post(
                "/update",
                `sex=${this.sex}&username=${this.username}&headname=${this.headname}&autograph=${this.autograph}&introduce=${this.introduce}&company=${this.company}&profession=${this.profession}&sapce=${this.sapce}&blog=${this.blog}&wechat=${this.wechat}&qq=${this.qq}&uid=${this.uid}`
            ).then(result=>{
                if(result.data!=0){
                    alert('修改成功');
                    location.reload();
                    console.log(result.data);
                }else{
                    alert('修改失败');
                    location.reload();
                }
            })
        },
        select(){
            this.axios.get("/select",{params:{uid:this.uid}}).then(res=>{
                console.log(res.data.result);
                this.sex=res.data.result.sex;
                this.username=res.data.result.username;
                this.headname=res.data.result.headname;
                this.autograph=res.data.result.autograph;
                this.introduce=res.data.result.introduce;
                this.company=res.data.result.company;
                this.profession=res.data.result.profession;
                this.sapce=res.data.result.sapce;
                this.blog=res.data.result.blog;
                this.wechat=res.data.result.wechat
                this.qq=res.data.result.QQ;
            })
        }
    },
    created(){
        this.GetLocalData();
        this.uid=this.userlist.uid;
        this.uname=this.userlist.uname;
    },
    mounted(){
        this.select();
    },
}
</script>