<!doctype html>
<html>
<body>
    <?php
        echo levenshtein("Hello World","ello World");
        echo "<br>";
        echo levenshtein("Hello World","ello World",2,3,4);
    ?>
</body>
</html>