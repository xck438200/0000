<?php
// header("Content-type : text/html; charset=utf-8");
session_start();
$user ="root";
$pass ="";
$host ="localhost";
$dbname ="wtf";
$utf8 = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'set names utf8 ');
$dbh = new PDO('mysql:host='.$host.';dbname='.$dbname, $user, $pass,$utf8);
print_r($dbh);
$status =[
	10 =>	'大神',
	20 =>	'叫兽',
	30 =>	'砖家',
	40 =>	'大牛',
	50 =>	'码农',
	60 =>	'菜鸟'
];