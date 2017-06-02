/**
 * Created by user on 2017/5/18.
 */
//搜索框点击划入划出事件
/*$("#search-a").click(function () {
    if($(".search-box").css("display")=="none") {
        $(".search-box").animate({left: '10px'}, "fast");
        $(".search-box").css("display", "block");
    }else{
        $(".search-box").animate({left: '266px'}, "fast");
        $(".search-box").css("display","none");
    }
});*/

    var flag = true;
    $("#search-a").click(function (){
        if (flag) {
            $(".search-box").stop().animate({left:'10px'}, 500,function(){
                flag = false;
            })
        } else {
            $(".search-box").stop().animate({left:'266px'}, 500,function(){
                flag = true;
            })
        }
        return false;
    });
    $(document).click(function () {
        $(".search-box").stop().animate({left:'266px'}, 500,function(){
            flag = true;
        })
    });
//二级导航效果
$(".nav-li3").mouseenter(function(){
    $(".nav-li3>ul").addClass("block");
    $(".nav-li3>ul").slideDown(10);
});
$(".nav-li3").mouseleave(function(){
    $(".nav-li3>ul").stop().slideUp(500);
});
$(".nav-li4").mouseenter(function(){
    $(".nav-li4>ul").addClass("block");
    $(".nav-li4>ul").stop().slideDown(10);
});
$(".nav-li4>ul").mouseleave(function(){
    $(".nav-li4>ul").stop().slideUp(500);
});
$(window).mouseleave(function () {
    $(".nav-li4>ul").stop().slideUp(500);
});


//轮播图
//在ul里面复制第1个li,也就是第1个图片
// $(".lunbotu li:first").clone().appendTo(".lunbotu");
(function () {
    var i = 0;
    $(".xm a").eq(0).addClass("xm-a2");
    function next(){//动画效果
        i++;
        $(".lunbotu").animate({"left":-1000*i},1000,function(){
            if(i > 7){
                i = 0;
                $(".xm a").eq(0).addClass("xm-a2").siblings().removeClass("xm-a2");
                $(this).css('left',0);
            }
        });
        $(".xm a").eq(i).addClass("xm-a2").siblings().removeClass("xm-a2");
    }
    var time=setInterval(next,2000);
    // $(".xm a").each(function (i) {
    //     $(".xm a").click(function () {
    //         var index=$(this).text()-1;
    //         console.log(index);
    //         clearInterval(time);
    //         $(this).addClass("xm-a2").siblings().removeClass("xm-a2");
    //         $(".lunbotu").animate({"left":-1000*index},100);
    //         i = index;
    //         time=setInterval(next,2000);
    //     });
        $(".xm a").each(function(index){
            $(this).click(function(){
                clearInterval(time);
               $(this).addClass("xm-a2").siblings().removeClass("xm-a2");
               $(".lunbotu").animate({"left":-1000*index},100);
               i = index;
               time=setInterval(next,2000);

            })
        });
    // });
//点击左右按钮,左右滑动
    $(".leftbtn").click(function () {
        clearInterval(time);
        if(i==0){
            i = 7;
            $(".lunbotu").animate({"left":-1000*i},100);
        }else{
            i -= 1;
            $(".lunbotu").animate({"left":-1000*i},500);
        }
        $(".xm a").eq(i).addClass("xm-a2").siblings().removeClass("xm-a2");
        time=setInterval(next,2000);
    });
    $(".rightbtn").click(function () {
        clearInterval(time);
        if (i==7){
            i = 0;
            $(".lunbotu").animate({"left":-1000*i},100);
        }else{
            i += 1;
            $(".lunbotu").animate({"left":-1000*i},500);
        }
        $(".xm a").eq(i).addClass("xm-a2").siblings().removeClass("xm-a2");
        time=setInterval(next,2000);
    });
//左右按钮消失出现
    $("#carousel").mouseover(function () {
        $(".leftbtn").css("display","block");
        $(".rightbtn").css("display","block")
    });
    $("#carousel").mouseout(function () {
        $(".leftbtn").css("display","none");
        $(".rightbtn").css("display","none")
    });
})();
//回到顶部按钮
(function(){
    if($(document).scrollTop() >= 200) {
        $("#backtop").stop().fadeIn();
    }
})();
$(window).scroll(function () {
    // console.log($(document).scrollTop());
    if($(document).scrollTop() >= 200){
        $("#backtop").stop().fadeIn();
    }else if ($(document).scrollTop() < 200){
        $("#backtop").stop().fadeOut();
    }
});
$("#backtop").hover(function () {
    $("#backtop").stop().animate({opacity:0.3},300);
},function () {
    $("#backtop").stop().animate({opacity:1},300);
});
$("#backtop").click(function () {
    // $(window).scroll = 0;
    $("html,body").animate({scrollTop:0}, 200);
});

//吸顶效果
// window.onload = function() {
    $(window).scroll(function () {
        // 获取当前页面的滚动条纵坐标位置
        var scrollT = $(document).scrollTop() ;
        // console.log(scrollT);
        if (scrollT >= 56) {
            $("#header").attr("style","top:-56px");
        }else {
            $("#header").attr("style","top:0");
        }
    });
// };

//获取账号用户名
var substr = document.URL;
function GetQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r =window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]);return null;
}
var user = GetQueryString("username");
// console.log(user);
$("#login-div").text(user);
if(user!=null){
    $("#login-div").addClass("block");
}else {
    $("#login-div").addClass("none");
}
//商品模板
var templete = $("#templete").html();
var tempStr = _.template(templete);
var url = "http://lc.shudong.wang/api_goods.php?pagesize=18";
$.get({url:url,
dataType:"json",
success:function (datb) {
    var dataArray = datb.data;
    // console.log(dataArray)
    $.each(dataArray,function (index,value) {
        var photoStr = tempStr(value);
        var jqueryduixiang = $(photoStr);
        if (index%3 == 0){
            jqueryduixiang.addClass("first")
        }
        $("#shop").append(jqueryduixiang);
    })
}});