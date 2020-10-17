//导入必要3大模块
const express=require("express");
const cors = require('cors');
const mysql=require("mysql");
const bodyParser=require("body-parser");
//启用express
const app=express();
//使用body-parser将post请求数据解析为对象
app.use(bodyParser.urlencoded({
	extended:false
}));
//连接数据库
const pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'yuanhua',
	connectionLimit:20
});
//应用cors跨域
app.use(cors());

//开始写接口
//登录接口
app.post("/login",(req,res)=>{
	var obj=req.body;
	var _uname=obj.uname;
	var _upwd=obj.upwd;
	var sql="select * from test where uname=? and upwd=?";
	pool.query(sql,[_uname,_upwd],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.length>0){
			res.send({message:'登录成功',code:1,result:result[0]});
		}else{
			res.send("0");
		}
	})
});
// 注册接口
app.post("/reg",(req,res)=>{
	var obj=req.body;
	var _phone=obj.phone;
	var _uname=obj.uname;
	var _pwd=obj.pwd;
	var _sex=obj.sex;
	console.log(obj);
	let sql="select uid from test where uname=?"
	pool.query(sql,[_uname],(err,result)=>{
		if(err) throw err;
		if(result.length==0){
			sql="insert into test(uname,upwd,phone,sex) values(?,?,?,?)";
			pool.query(sql,[_uname,_pwd,_phone,_sex],(err,result)=>{
				if(err) throw err;
				if(result.affectedRows>0){
					res.send({message:"注册成功",code:1});
				}else{
					res.send({message:"注册失败",code:0});
				}
			})
		}else{
			res.send({message:"注册失败",code:0});
		}
	})
});
//查询用户
app.get("/select",(req,res)=>{
	//获取前台缓存的uid
    var uid= req.query.uid;
    var sql="select * from test where uid=?";
    pool.query(sql,[uid],(err,result)=>{
		if(err) throw err;
		console.log(result);
    	res.send({message:'查询成功',code:1,result:result[0]});
    })
});
//插入用户数据
app.post("/update",(req,res)=>{
    var sql="update test set ? where uid=?";
    var obj=req.body;
    pool.query(sql,[obj,obj.uid],(err,result)=>{
        if(err) throw err;
        console.log(result);
        if(result.affectedRows>0){
            res.send({message:'修改成功',code:1,result:result[0]});
        }else{
            res.send("0");
        }
    })
})
//拿取轮播图1数据
app.get("/getlun",(req,res)=>{
	var sql="select * from lunbo";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		console.log(result);
    	res.send({message:'查询成功',code:1,result:result});
    });
})
//拿取轮播图2数据
app.get("/getlun2",(req,res)=>{
	var sql="select * from lunbo2";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		console.log(result);
    	res.send({message:'查询成功',code:1,result:result});
    });
})
//拿取教程数据
app.get("/teach",(req,res)=>{
	var sql="select uid,pic,title,studynum,talknum,price from teach where uid<5";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		console.log(result);
    	res.send({message:'查询成功',code:1,result:result});
    });
})
// 获取所有文章分类的接口
app.get('/category',(req,res)=>{
	//查找文章分类表中的所有数据
	let sql = 'SELECT * FROM category';
	//通过MySQL连接池执行SQL语句
	pool.query(sql,(err,results)=>{
	  if(err) throw err;
	  res.send({message:'查询成功',code:1,results:results});
	});
});
// 获取所有教程分类的接口
app.get('/dcategory',(req,res)=>{
	//查找文章分类表中的所有数据
	let sql = 'SELECT * FROM details';
	//通过MySQL连接池执行SQL语句
	pool.query(sql,(err,results)=>{
	  if(err) throw err;
	  res.send({message:'查询成功',code:1,results:results});
	});
});

//获取特定分类下的课程信息的接口并分页
app.get("/lists",(req,res)=>{
	//接收客户端传递的URL参数中的cid  -- 文章分类ID
    let cid = req.query.cid;
    //接收客户端传递的URL参数中的cid  -- 教程分类ID
	let did = req.query.did;
	//接收客户端传递的URL参数中的page -- 页码
	let page = req.query.page;
	//存储每页显示的记录数(其实pagesize就是一个纯变量,与分页没有任何关系)
	let pagesize = 12;
	//根据MySQL分页的标准计算公式计算出offset参数值,并且带入到SQL语句中
    let offset = (page - 1) * pagesize;
    //存储总记录数
	let rowcount;
	//存储总页数
	let pagecount;
    if(did==1){
        let sql = 'SELECT uid,pic,title,studynum,talknum,price FROM teach WHERE category_id = ? LIMIT ' + offset + ',' + pagesize;
        //执行SQL分页查询
        pool.query(sql,[cid],(err,result)=>{
            if(err) throw err;
            sql = 'SELECT COUNT(uid) AS count FROM teach WHERE category_id=?';
            pool.query(sql,[cid],(err,results)=>{
                if(err) throw err;
                //1.记录总记录数    
                rowcount = results[0].count;
                //2.计算总页数
                pagecount = Math.ceil(rowcount / pagesize);
                //返回原来的查询记录的数据及总页数信息
                res.send({message:'查询成功',code:1,results:result,pagecount:pagecount});   
            });
        })
    }else{
		if(cid==1){
			let sql = 'SELECT uid,pic,title,studynum,talknum,price FROM teach WHERE details_id = ? LIMIT ' + offset + ',' + pagesize;
			pool.query(sql,[did],(err,result)=>{
				if(err) throw err;
				sql = 'SELECT COUNT(uid) AS count FROM teach WHERE details_id = ?';
				pool.query(sql,[did],(err,results)=>{
					if(err) throw err;
					//1.记录总记录数    
					rowcount = results[0].count;
					//2.计算总页数
					pagecount = Math.ceil(rowcount / pagesize);
					//返回原来的查询记录的数据及总页数信息
					res.send({message:'查询成功',code:1,results:result,pagecount:pagecount});   
				});
			})
		}else{
			let sql = 'SELECT uid,pic,title,studynum,talknum,price FROM teach WHERE category_id = ? and details_id = ? LIMIT ' + offset + ',' + pagesize;
			//执行SQL分页查询
			pool.query(sql,[cid,did],(err,result)=>{
				if(err) throw err;
				sql = 'SELECT COUNT(uid) AS count FROM teach WHERE category_id = ? and details_id = ?';
				pool.query(sql,[cid,did],(err,results)=>{
					if(err) throw err;
					//1.记录总记录数    
					rowcount = results[0].count;
					//2.计算总页数
					pagecount = Math.ceil(rowcount / pagesize);
					//返回原来的查询记录的数据及总页数信息
					res.send({message:'查询成功',code:1,results:result,pagecount:pagecount});   
				});
			})
		}
    }
})

//获取全部数据
app.get("/all",(req,res)=>{
	//接收客户端传递的URL参数中的page -- 页码
	let page = req.query.page;
	//存储每页显示的记录数(其实pagesize就是一个纯变量,与分页没有任何关系)
	let pagesize = 12;
	//根据MySQL分页的标准计算公式计算出offset参数值,并且带入到SQL语句中
	let offset = (page - 1) * pagesize;
	//现以接收到的条件进行文章信息的查找,此时的pagesize才是真正的返回多少条记录呢
	let sql = 'SELECT * FROM teach LIMIT ' + offset + ',' + pagesize;
	//存储总记录数
	let rowcount;
	//存储总页数
	let pagecount;
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		sql = 'SELECT COUNT(uid) AS count FROM teach';
		pool.query(sql,(err,results)=>{
			if(err) throw err;
			//1.记录总记录数    
			rowcount = results[0].count;
			//2.计算总页数
			pagecount = Math.ceil(rowcount / pagesize);
			//返回原来的查询记录的数据及总页数信息
			res.send({message:'查询成功',code:1,results:result,pagecount:pagecount,rowcount:rowcount});   
		});
	})
})
//获取搜索的数据
app.get('/search',(req,res)=>{
	//接收客户端传递的URL参数中的page -- 页码
	let page = req.query.page;
	//存储每页显示的记录数(其实pagesize就是一个纯变量,与分页没有任何关系)
	let pagesize = 12;
	//根据MySQL分页的标准计算公式计算出offset参数值,并且带入到SQL语句中
	let offset = (page - 1) * pagesize;
	//存储总记录数
	let rowcount;
	//存储总页数
	let pagecount;
	//获取前台传来的搜索条件
	let q=req.query.q;
	q='%'+q+'%';
	let sql="SELECT * FROM teach WHERE title LIKE ? LIMIT " + offset + ',' + pagesize;
	pool.query(sql,[q],(err,result)=>{
		if(err) throw err;
		//1.记录总记录数    
		rowcount = result.length;
		//2.计算总页数
		pagecount = Math.ceil(rowcount / pagesize);
		console.log(result);
		console.log(rowcount);
		//返回原来的查询记录的数据及总页数信息
		res.send({message:'查询成功',code:1,results:result,pagecount:pagecount,rowcount:rowcount});   
	})
})



// 获取课程/教程的详细信息
app.get('/course',(req,res)=>{
	//获取文章ID
	let uid = req.query.uid;
	//SQL查询
	let sql = 'SELECT * from teach where uid=?';
	//执行SQL语句
	pool.query(sql,[uid],(err,result)=>{
	  if(err) throw err;
	  res.send({message:'查询成功',code:1,result:result[0]});
	});
});

app.listen(5050,()=>{
  console.log('server is running...');
});