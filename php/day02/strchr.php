<!doctype html>
<html>
<body>
    <?php
        echo strchr("Hello world!","world").'<br>';//world!
        echo strchr("Hello world!",111).'<br>';//o world!
        echo strchr("Hello world!","world",true);//Hello
    ?>
</body>
</html>