<?php
require_once("concat.php");//运行此文件前先读入concat.php文件
//获取提交的信息
$post = $_POST;//获取post方式提交的所有信息赋值给变量post
$game_id = $post['game_id'];//将game_id信息赋值给变量game_id
$name = $post['name'];
$password=$post['password'];
$password = md5($password);//将密码以MD5编码方式编码
$age = $post['age'];
$nationality = $post['nationality'];
$location = $post['location'];
$troops=$post['troops'];
//插入语句,给dota2这个表中添加数据
$insertsql = "insert into dota2 (
            game_id,
            name,
            password,
            age,
            nationality,
            location,
            troops
    ) values (
            '{$game_id}',
            '{$name}',
            '{$password}',
            '{$age}',
            '{$nationality}',
            '{$location}',
            '{$troops}'
        )";
// echo $insertsql ;
/*
PDO::exec()  执行一条SQL语句,并返回受影响的行数
$dbh -> exec($insertsql) 就是执行()里面的$insertsql语句,
        $dbh是concat.php里面new的一个PDO对象
*/
$result = $dbh -> exec($insertsql);
//此处就是把$insertsql语句执行后的结果返回给$result,也就是受影响的行数
print_r($result) .'<br>';//1  打印出来结果是1,sql里面有1行受到影响
echo "注册成功";
// print_r($post);

/* 关于mysql语句调试方法：
  1.把这个sql语句在浏览器里面打印出来;
  2.复制粘贴到Navicat软件的查询编辑里;
  3.执行这个sql语句看看有没有报错，根据错误信息去排查。*/

$sql = 'SELECT * FROM dota2';// sql 查询语句
 $select = $dbh->query($sql); //  PDO查询语法
 print_r($select);
 //PDOStatement Object ( [queryString] => SELECT * FROM dota2 )
   foreach ($dbh->query($sql) as $row) {//遍历这个PDO对象并将结果赋给变量row
       echo "<pre>";
       echo "以下用户注册成功！";
       print_r($row['name']);//打印其name值

   }

   // 内网： 192.168.30.191
