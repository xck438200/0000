<!doctype html>
<html>
<body>
    <?php
        $qwe='can you help me,plese? ';
        echo $qwe.'<br>';
        echo addcslashes($qwe,'e').'<br>';
        echo addcslashes($qwe,"g..p")
    ?>
//      can you help me,plese?
//      can you h\elp m\e,pl\es\e?
//      ca\n y\ou \he\l\p \me,\p\lese?
</body>
</html>