<?php 
	
	if(!empty($_GET['page'])){
		$page = $_GET['page'];
	}else{
		$page = 1;
	}
	if(!empty($_GET['per_page'])){
		$per_page = $_GET['per_page'];
	}else{
		$per_page = 10;
	}
	$url = "http://yx.xianjian.com/p/api.php?method=wf&api_key=nimakdkeiLdkfen2lidkdlDLLEKd&page=".$page."&per_page=".$per_page."&tag=&type=5&order=2&_ksTS=1494929874030_32&jsoncallback=info";

	echo file_get_contents($url);