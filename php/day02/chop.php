<!doctype html>
<html>
<body>
    <?php
        $qwe="今天天气真好,风吹着\n很舒\n服\n\n";
        echo chop($qwe).'<br>';//今天天气真好,风吹着 很舒 服
        $qwe2=chop($qwe);
        echo chop($qwe2,"很舒服" ).'<br>';//今天天气真好,风吹着 很舒
    ?>
</body>
</html>