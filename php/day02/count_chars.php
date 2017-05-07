<!doctype html>
<html>
<body>
    <?php
        $data = "good good study,day day up";
        foreach (count_chars($data, 1) as $qwe => $val) {
           echo "字符串里有 $val 个 \"" , chr($qwe) , "\" .\n"."<br>";
        }
          /*字符串里有 4 个 " " .
          字符串里有 1 个 "," .
          字符串里有 2 个 "a" .
          字符串里有 5 个 "d" .
          字符串里有 2 个 "g" .
          字符串里有 4 个 "o" .
          字符串里有 1 个 "p" .
          字符串里有 1 个 "s" .
          字符串里有 1 个 "t" .
          字符串里有 2 个 "u" .
          字符串里有 3 个 "y" . */
    ?>
</body>
</html>