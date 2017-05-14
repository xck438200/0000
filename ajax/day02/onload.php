<?php
require_once("concat.php");

$post = $_POST;
$game_id = $post['game_id'];
$name = $post['name'];
$password=$post['password'];
$password = md5($password);
$age = $post['age'];
$nationality = $post['nationality'];
$location = $post['location'];
$troops=$post['troops'];

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
$result = $dbh -> exec($insertsql);
print_r($result) .'<br>';
echo "注册成功";
// print_r($post);

$sql = 'SELECT * FROM dota2';// sql 语句 查
 $select = $dbh->query($sql); //pdo查询语法
   foreach ($dbh->query($sql) as $row) {
       echo "<pre>";
       echo "以下用户注册成功！";
       print_r($row['name']);

   }

   // 内网： 192.168.30.191
