<?php
    require_once("lianjiesql.php");
    $sql = 'select title, content from message order by id asc';
    $select = $dbh->query($sql);
    $arr = [];
    foreach ($select as $key => $value) {
//        $time = date("Y年m月d h:i:s", $value['created_time']);
        $arr['message'][$key] = $value;
//        $arr['message'][$key]['created_time'] = $time;
    }
//    echo "<pre>";
//    print_r($arr);
    echo json_encode($arr);