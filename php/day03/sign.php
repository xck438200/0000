<?php
require_once("lianjie.php");

$post = $_POST;
$name = $post['name'];
$password = $post['password'];
$password = md5($password);
$sex = $post['sex'];
$age = $post['age'];
$email = $post['email'];
$cellphone=$post['cellphone'];

$insertsql = "insert into qwert (
            name,
            password,
            sex,
            age,
            email,
            cellphone
    ) values (
            '{$name}',
            '{$password}',
            '{$sex}',
            '{$age}',
            '{$email}',
            '{$cellphone}'

        )";
// echo $insertsql ;
$result = $dbh -> exec($insertsql);
print_r($result) .'<br>';
echo "注册成功";
// print_r($post);

$sql = 'SELECT * FROM qwert';// sql 语句 查
// $select = $dbh->query($sql); //pdo查询语法
   foreach ($dbh->query($sql) as $row) {
       echo "<pre>";
       echo "以下用户注册成功！";
       print_r($row['name']);

   }

   // 内网： 192.168.30.191
