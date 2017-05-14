<?php
//设置页面内容是html,编码格式是utf-8
    header("Content-type: text/html ; charset=utf-8");
    $user = "root";//数据库用户名
    $pass = "";//数据库密码
    $host = 'localhost';//主机地址
    $dbname = 'xck';//数据库名
    //编码方式为utf-8
    $utf8 = array(PDO::MYSQL_ATTR_INIT_COMMAND =>'set names utf8');
    //连接到mysql
    $dbh = new PDO('mysql:host='.$host.';dbname='.$dbname, $user, $pass, $utf8);
    print_r($dbh);
    // $dbh = new PDO('mysql:host = localhost;dbname =xck',$user,$pass,$utf8);
