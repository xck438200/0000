<!doctype html>
<html>
<body>
    <?php
        echo strcmp("Hello world!","Hello world!") . '<br>'; // 0(两字符串相等)
        echo strcmp("Hello world!","Hello") . '<br>'; // 7
        echo strcmp("Hello world!","Hello world! Hello!") . '<br>'; // -7
        echo strcmp("Hello","Hello") . '<br>';//0
        echo strcmp("Hello","hELLo");//-1
    ?>
</body>
</html>