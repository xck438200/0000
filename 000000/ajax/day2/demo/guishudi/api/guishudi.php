<?php
header("Content-type: text/html; charset=gbk");
$mobile = $_GET['mobile'];
$url = "https://chongzhi.jd.com/json/order/search_searchPhone.action?mobile=".$mobile."&_=1494492818590";
echo $msg = file_get_contents($url);
