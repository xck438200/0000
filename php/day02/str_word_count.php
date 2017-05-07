<!doctype html>
<html>
<body>
    <?php
        print_r(str_word_count("I love China & good study!",1));
        print_r(str_word_count("I love China & good study!",1,"&"));
    ?>
    /*  Array
        (
            [0] => I
            [1] => love
            [2] => China
            [3] => good
            [4] => study
        )
        Array
        (
            [0] => I
            [1] => love
            [2] => China
            [3] => &
            [4] => good
            [5] => study
        )
    */
</body>
</html>