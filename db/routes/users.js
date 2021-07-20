var express = require('express');
var URL = require('url');
//引入mysql模块
var mysql = require("mysql");
var router = express.Router();
//引入文件  
var dbConfig = require('../public/javascripts/database/DBConfig');
var qusrySql = require('../public/javascripts/database/querysql');
//使用DBConfig中配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
//响应JSON数据
var responseJSON = function (res, ret) {
  if (typeof ret == 'undefined') {
    res.json({
      code: "-200",
      msg: "操作失败"
    });
  } else {
    res.json(ret);
  }
};

//进行查询
router.post('/select', function (req, res, next) {
  pool.getConnection(function (err, connection) {
    var params = req.query || req.params; 
    let sql = qusrySql.select_userinfo(params)
    connection.query(sql, function (err, result) {
      //将结果以json形式返回到前台
      responseJSON(res, result);
      //释放链接
      connection.release();
    })
  })
})

router.post('/insert', function (req, res, next) {
  pool.getConnection(function (err, connection) {
    var params = req.query || req.params; 
    let sql = qusrySql.insert_userinfo(params)
    connection.query(sql, params, function (err, result) {
      if (err) {
        res.json({
          code: "-200",
          msg: "操作失败"
        });
      } else {
        res.json({
          code: "200",
          msg: "操作成功"
        });
      }
      //释放链接
      connection.release();
    })
  })
})

router.post('/delete', function (req, res, next) {
  pool.getConnection(function (err, connection) {
    var params = req.query || req.params; 
    let sql = qusrySql.delete_userinfo(params)
    connection.query(sql, params, function (err, result) {
      if (err) {
        res.json({
          code: "-200",
          msg: "操作失败"
        });
      } else {
        res.json({
          code: "200",
          msg: "操作成功"
        });
      }
      //释放链接
      connection.release();
    })
  })
})

module.exports = router;
