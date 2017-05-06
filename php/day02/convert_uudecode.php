<!doctype html>
<html>
<body>
    <?php
        $str = "你好!";
        // 对字符串进行编码
        $str1 = convert_uuencode($str);
        echo $str1 . "<br>";//'Y+V@Y:6](0`` `
        // 对字符串进行解码
        $str2 = convert_uudecode($str1);
        echo $str2.'<br>';//你好!
        echo $str;//你好!
    ?>
</body>
</html>