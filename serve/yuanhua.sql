SET NAMES UTF8;
DROP DATABASE IF EXISTS yuanhua;
CREATE DATABASE yuanhua CHARSET=UTF8;
use yuanhua;
CREATE TABLE test(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32) not null,/*用户名*/
    upwd VARCHAR(32) not null,/*密码*/
    phone VARCHAR(16) not null,/*电话*/
    email VARCHAR(64) default NULL,/*邮箱*/
    sex INT(11) default NULL,/*1为男 0为女*/
    username VARCHAR(32) default NULL,/*真实姓名*/
    headname VARCHAR(32) default NULL,/*头衔*/
    autograph VARCHAR(32) default NULL,/*个性签名*/
    introduce VARCHAR(200) default NULL,/*个人介绍*/
    company VARCHAR(32) default NULL,/*公司*/
    profession VARCHAR(32) default NULL,/*职业*/
    QQ VARCHAR(32) default NULL,/*QQ*/
    wechat VARCHAR(32) default NULL,/*微信*/
    sapce VARCHAR(32) default NULL,/*个人空间*/
    blog VARCHAR(32) default NULL,/*博客*/
    learning varchar(32) default NULL, /*学习意向*/
    mypic varchar(128) default NULL /*头像*/
)ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
INSERT INTO test VALUES ('1','safihsaifd','qipan0703','15692910889','568043384@qq.com',1,'阿尔法','教授','别爱我没结果',NULL,'腾讯','美工','568043384','999999',NULL,NULL,NULL,NULL);

CREATE TABLE lunbo(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    pic varchar(128) default NULL
)ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
INSERT INTO lunbo VALUES ('1', 'img/lun1.jpg');
INSERT INTO lunbo VALUES ('2', 'img/lun2.jpg');
INSERT INTO lunbo VALUES ('3', 'img/lun3.jpg');
INSERT INTO lunbo VALUES ('4', 'img/lun4.jpg');
INSERT INTO lunbo VALUES ('5', 'img/lun5.jpg');

CREATE TABLE lunbo2(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    pic varchar(128) default NULL
)ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
INSERT INTO lunbo2 VALUES ('1', 'img/certify012.png');
INSERT INTO lunbo2 VALUES ('2', 'img/certify013.png');
INSERT INTO lunbo2 VALUES ('3', 'img/certify014.jpg');
INSERT INTO lunbo2 VALUES ('4', 'img/certify015.jpg');
INSERT INTO lunbo2 VALUES ('5', 'img/certify016.jpg');

CREATE TABLE teach(
    uid INT PRIMARY KEY AUTO_INCREMENT,/*自增主键id*/
    category_id VARCHAR(12) DEFAULT 1,/*分类id*/
    uname VARCHAR(12) DEFAULT null,
    title VARCHAR(64) DEFAULT null,
    price VARCHAR(32) DEFAULT NULL,
    pic varchar(128) default NULL,
    studynum VARCHAR(12) DEFAULT 0,
    talknum VARCHAR(12) DEFAULT 0,
    category_name VARCHAR(12) DEFAULT null,
    intr VARCHAR(256) DEFAULT NULL
)ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
INSERT INTO teach VALUES("1","2","李瑞","怎么把爱好变成工作成为职业画师，原画人美宣插画教程【李睿】","免费","img/studypic1.jpg","256","0",'教程',NULL);
INSERT INTO teach VALUES("2","2","冷蝉","原画人二次元插画教程，Q版设计案例讲解，sai的用法演示【冷蝉】","免费","img/studypic2.jpg","479","0",'教程',NULL);
INSERT INTO teach VALUES("3","2","九袋掌老","从业9年的大佬都是这样细化角色的，原画人角色原画教程【九袋掌老】","免费","img/studypic3.jpg","208","2",'教程',NULL);
INSERT INTO teach VALUES("4","2","东彪","原画人场景原画教程，四种场景方法防止你掉进场景坑【东彪】","免费","img/studypic4.jpg","323","3",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","铁匠","插画中关于人体结构，原画人美宣插画教程【铁匠","免费","img/studypic5.jpg","212","4",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","吸烟","人设思路讲解，原画人游戏原画教程【吸烟】","免费","img/studypic6.jpg","208","5",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","冷蝉","手把手教你画超萌Q版，原画人二次元插画教程【冷蝉】","免费","img/studypic7.jpg","216","0",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","寺久","史尔特尔同人头像绘制，原画人伪厚涂插画教程【寺久】","免费","img/studypic8.jpg","206","0",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","JW","揭秘游戏背景的制作流程快速上手，原画人二次元场景插画教程【JW】","免费","img/studypic9.jpg","225","0",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","潘潘","美少女的半身像细化，原画人插画教程【潘潘】","免费","img/studypic10.jpg","209","2",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","JW","一学就废插画完成度如何快速提升，原画人二次元场景插画教程【JW】","免费","img/studypic11.jpg","219","2",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","杜祥洋","人体演示讲解，原画人游戏原画教程【杜祥洋】","免费","img/studypic12.jpg","219","2",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","九樾儿","光与色彩的魔法，原画人日韩风商业插画教程【九樾儿】","免费","img/studypic13.jpg","223","2",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","彭倩","唠唠国风设计风格十年来的变迁，原画人游戏原画教程【彭倩】","免费","img/studypic14.jpg","323","2",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","JW","掌握技巧快速实现画面效果＋点评改图，原画人二次元场景插画教程【JW】","免费","img/studypic15.jpg","283","2",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","九樾儿","勾线演示讲解，原画人日韩风商业插画教程【九樾儿】","免费","img/studypic16.jpg","238","2",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","吸烟","人体演示讲解＋点评改图，原画人游戏原画教程【吸烟】","免费","img/studypic17.jpg","268","2",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","玉梨子","女性头部绘制讲解，原画人游戏原画教程【玉梨子】","免费","img/studypic18.jpg","245","2",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","JW","揭秘手机主题壁纸的制作流程，原画人二次元场景插画教程【JW】","免费","img/studypic19.jpg","289","0",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","纯子","光与角色的互动＋改图，原画人游戏原画教程【纯子】","免费","img/studypic20.jpg","289","0",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","寺久","两步开始你的头像之旅+点评改图，原画人伪厚涂插画教程【寺久】","免费","img/studypic21.jpg","289","0",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","九樾儿","奇妙的背景构成法，原画人日韩风商业插画教程【九樾儿】","免费","img/studypic22.jpg","216","0",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","JW","插画构图的秘密+改图，原画人二次元场景插画教程【JW】","免费","img/studypic23.jpg","116","0",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","吸烟","深入细化，原画人角色原画教程【吸烟】","免费","img/studypic24.jpg","176","0",'教程',NULL);
INSERT INTO teach VALUES(NULL,"2","铁匠","质感的刻画，原画人游戏原画教程【铁匠】","免费","img/studypic25.jpg","276","2",'教程',NULL);
INSERT INTO teach VALUES(NULL,"3","雪莉","原画人商业插画基础入门课程","499元","img/studypic26.jpg","0","0",'课程',NULL);
INSERT INTO teach VALUES(NULL,"3","芒果猫","原画人二次元插画1期【芒果猫】","5690元","img/studypic27.jpg","0","0",'课程',NULL);
INSERT INTO teach VALUES(NULL,"3","寺久","原画人日系伪厚涂头像班【寺久】","1800元","img/studypic28.jpg","0","0",'课程',NULL);
INSERT INTO teach VALUES(NULL,"3","九袋掌老","原画人东方风角色【九袋掌老】","5990元","img/studypic29.jpg","31","0",'课程',NULL);
INSERT INTO teach VALUES(NULL,"3","但丁、重渡","原画人美宣插画【但丁、重渡】","5999元","img/studypic30.jpg","41","12",'课程',NULL);
INSERT INTO teach VALUES(NULL,"3","吸烟","原画人日韩角色设计1期【吸烟】","4890元","img/studypic31.jpg","23","12",'课程',NULL);

CREATE TABLE category(
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(12)
)ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
INSERT INTO category VALUES ('1', '全部');
INSERT INTO category VALUES ('2', '教程');
INSERT INTO category VALUES ('3', '课程');