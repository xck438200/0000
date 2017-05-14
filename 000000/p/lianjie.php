<?php
	//设置页面内容是html,编码格式是utf-8
	header("Content-type:text/html;charset=utf-8");
	$user = "root";//数据库的用户名
	$psd  = "";//数据库密码
	$host = "localhost";//主机地址
	$dbname = "wtf";//数据库名字
	$utf8 = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'set names utf8');//编码方式,数据库属性初始化命令
	$dbh = new PDO('mysql:host='.$host.' ; dbname='.$dbname,$user,$psd,$utf8);