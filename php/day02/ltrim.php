<!doctype html>
<html>
<body>
    <?php
        $str = "Today is sun day!";
        echo    $str.'<br>';//Today is sun day!
        echo ltrim($str,"Today") . '<br>';//is sun day!
        echo rtrim($str,"day!") . '<br>';//Today is sun
        echo trim($str,"Today  day!");//is sun
    ?>
</body>
</html>