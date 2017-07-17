~(function() {
  $(".icon-menu").click(function(a) {
    a.stopPropagation();
    var b = $(".menu");
    if (b.css("display") == "none") {
      b.show();
    } else {
      b.hide();
    }
    $(document).click(function() {
      b.hide();
    })
  })
  $(".city").click(function(a) {
    a.stopPropagation();
    var b = $(".address");
    if (b.css("display") == "none") {
      b.show();
    } else {
      b.hide();
    }
    $(document).click(function() {
      b.hide();
    })
  })
})()