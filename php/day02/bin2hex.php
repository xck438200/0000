<!doctype html>
<html>
<body>
    <?php
        $kk = "北京";
        echo bin2hex($kk) . '<br>'; //e58c97e4baac
        echo pack('H*',bin2hex($kk)).'<br>'//北京
    ?>
</body>
</html>