<!doctype html>
<html>
<body>
    <?php
        $str1 = "1 + 1 = 2";
        $str2 = "1 * 1 = 1";
        $str3 = "Could you borrow me 5$?";
        $str4 = "Are you not e&";
        $str5 = "The caret [ ^ ] Looks like a hat!";

        echo quotemeta($str1)."<br>";//1 \+ 1 = 2
        echo quotemeta($str2)."<br>";//1 \* 1 = 1
        echo quotemeta($str3)."<br>";//Could you borrow me 5\$\?
        echo quotemeta($str4)."<br>";//Are you not e&
        echo quotemeta($str5)."<br>";//The caret \[ \^ \] Looks like a hat!
    ?>
</body>
</html>