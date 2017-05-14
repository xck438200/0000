<?php
    require_once("lianjiesql.php");
//    date_default_timezone_set("Asia/Shanghai");
    $post = $_POST;
//    $name = $post['name'];//将game_id信息赋值给变量game_id
//    $password = $post['password'];
//    $password = md5($password);//将密码以MD5编码方式编码
    $title = $post['title'];
    $content = $post['content'];
//    $time = time();
    $insertsql = "insert into message (
                title,
                content
        ) values (
                '{$title}',
                '{$content}'
            )";
//    echo($insertsql);
    $result = $dbh -> exec($insertsql);

    /*$insertsql = "select * from message order by id desc limit 1";
    foreach($dbh->query($insertsql) as $key => $value){
        $time = date("Y年m月d h:i:s", $value['time']);
        $arr = $value;
        $arr['time'] = $tim;
    }*/
//    print_r($result) .'<br>';//1  打印出来结果是1,sql里面有1行受到影响
//    echo "注册成功";




    

