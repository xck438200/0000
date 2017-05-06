<!doctype html>
<html>
<body>
    <?php
    $str = addslashes('Shanghai \is\ the "biggest" city in China.');
    echo($str);//Shanghai \\is\\ the \"biggest\" city in China.
    ?>
</body>
</html>