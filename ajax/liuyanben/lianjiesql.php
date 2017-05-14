<?php
//    header:(" Content-type : text/html; charset = utf-8 ");
//    session_start;
    $user = "root";
    $pwd = "";
    $host = "localhost";
    $dbname = "wtf";
    $utf8 = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'set names utf8');
    $dbh = new PDO('mysql:host='.$host.';dbname='.$dbname,$user,$pwd,$utf8);

