<!doctype html>
<html>
<body>
    <?php
        $str = "1234567890";
        echo chunk_split($str,2).'<>';//12 34 56 78 90
        echo chunk_split($str,3,"@");//123@456@789@0@
    ?>
</body>
</html>