<?php
    if (!empty($_GET['page'])) {
      $page = $_GET['page'];
    }else {
      $page = 1;
    }

    if (!empty($_GET['pre_page'])) {
      $pre_page = $_GET['pre_page'];
    }else {
      $pre_page = 10;
    }
    $url = "http://yx.xianjian.com/p/api.php?method=wf&api_key=nimakdkeiLdkfen2lidkdlDLLEKd&page=".$page."&per_page=".$pre_page."&tag=&type=5&order=2&_ksTS=1494934951605_32&jsoncallback=jsonp33";
    echo $data = file_get_contents($url);

