var express = require('express');
var router = express.Router();
var user = require('../database/db').user;
var controller=require("../controller/controller.js");
var models=require("../models/model.js")
//var cookieParser = require('cookie-parser');
//db.js里设置了用那个数据库（lvfei） ， 这里定义用lvfei里的哪张表
//这时 user是一个 Model ，它是在db.js里定义的
// var cat = require('../database/cat').cat;
var bodyParser = require('body-parser');
var session = require('express-session');
var formidable = require('formidable');//node.js表单——formidable
var fs = require("fs");
var app = express();
var path=require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
