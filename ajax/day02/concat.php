<?php
    header("Content-type: text/html ; charset=utf-8");
    $user = "root";
    $pass = "";
    $host = 'localhost';
    $dbname = 'xck';
    $utf8 = array(PDO::MYSQL_ATTR_INIT_COMMAND =>'set names utf8');
    $dbh = new PDO('mysql:host='.$host.';dbname='.$dbname, $user, $pass, $utf8);
//        $dbh = new PDO('mysql:host='.$host.';dbname='.$dbname, $user, $pass,$utf8);
