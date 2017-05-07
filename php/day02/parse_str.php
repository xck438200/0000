<!doctype html>
<html>
<body>
    <?php
        parse_str("name=kk&age=123");
        echo $name."<br>";//kk
        echo $age.'<br>';//123
        parse_str("name=kk&age=123",$myArray);
        print_r($myArray);//Array ( [name] => kk [age] => 123 )
    ?>
</body>
</html>