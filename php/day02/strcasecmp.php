<!doctype html>
<html>
<body>
    <?php
         echo strcasecmp("beijing","BEIJING").'<br>';//0
         echo strcasecmp("beijing","BEI").'<br>';//4
         echo strcasecmp("beijing","JING");//-8
    ?>
</body>
</html>