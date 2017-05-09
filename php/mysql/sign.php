<?php
  require_once("lianjie.php");
  // echo "<pre>";
  $post = $_POST;
  $name = $post['name'];
  $age = $post['age'];
  $sex = $post['sex'];
  $email = $post['email'];
  $password = $post['password'];
  $password = md5($password);
  $insertsql = "insert into user(
  		name,
  		age,
  		password,
  		email,
  		sex
  	) value(
  		'{$name}',
  		'{$age}',
  		'{$password}',
  		'{$email}',
  		'{$sex}'
  	)";
  	echo $insertsql;
  	$result = $dbh -> exec($insertsql);
  	print_r($result);
  	echo"恭喜你注册成功";