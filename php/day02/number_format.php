<!doctype html>
<html>
<body>
    <?php
    echo number_format("123456789")."<br>";//123,456,789
    echo number_format("123456789",4)."<br>";//123,456,789.0000
    echo number_format("123456789" , 2 , "," , "?");//123?456?789,00
    ?>
</body>
</html>