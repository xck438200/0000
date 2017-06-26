var itemsPerload = 8;
var items = $(".items");
// var page =1;
var templeteStr = $("#templete").html();
var tempStr = _.template(templeteStr);
    $.get({
        url : "mobile.php",
        dataType: "json",
        success: function (data) {
            var obj = data.subjects;
            console.log(obj);
            // $.each(obj,function (index) {
            //     var img = obj[index].images.large;
            //     $(".item-poster").append(img);
            // });
            // var img = obj[0].images.large;
            // console.log(img)
            $.each(obj, function (index, value) {
                var kao = tempStr(value);
                var $domObj = $(kao);
                // console.log($domObj);
                $(".items").append($domObj);
            });

        }
    });

