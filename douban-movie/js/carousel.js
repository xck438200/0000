/**
 * Created by user on 2017/6/21.
 */
var carousel = document.getElementById('carousel');
var imageLis = document.querySelectorAll("#carousel .imageList li");
var deltaX, deltaY;
// var body = document.getElementsByTagName("body");



var prev = 4; //上一张
var idx = 0; //当前中间的图片
var next = 1; // 下一张
var windowWidth;

// 当你的设备，或窗口更改时
window.onresize = init;
init();

function init() {
    // 屏幕的宽度
    windowWidth = document.documentElement.clientWidth;
    // body.width = windowWidth;
    // console.log(windowWidth);
    // 计算一下图片的宽度
    carousel.style.height = 422 + "px";
    // console.log(carousel.style.height);

    // 设置li的默认位置
    for (var i = 1; i < imageLis.length; i++) {
        imageLis[i].style.webkitTransform = "translateX(" + windowWidth + "px)";
    }

    // 把默认的效果清除掉
    imageLis[idx].style.transition = 'none';
    imageLis[next].style.transition = 'none';
    imageLis[prev].style.transition = 'none';

    // 给当前这三张图片归位
    imageLis[next].style.webkitTransform = "translateX(" + windowWidth + "px)";
    imageLis[idx].style.webkitTransform = "translateX(0px)";
    imageLis[prev].style.webkitTransform = "translateX(" + -windowWidth + "px)";
}




carousel.addEventListener('touchstart', touchStartHandler, false);
carousel.addEventListener('touchmove', touchMoveHandler, false);
carousel.addEventListener('touchend', touchEndHandler, false);


var startX;

function touchStartHandler(ev) {
    // 阻止默认事件
    ev.preventDefault();
    // 如果是多根手指就不让他开始了
    if (ev.touches.length > 1) {
        return;
    }

    // console.log(ev)

    // 记录起始位置
    deltaX = ev.touches[0].clientX;
    startX = ev.touches[0].clientX;
    // console.log(deltaX, deltaY)


    imageLis[idx].style.transition = 'none';
    imageLis[next].style.transition = 'none';
    imageLis[prev].style.transition = 'none';


    imageLis[next].style.webkitTransform = "translateX(" + windowWidth + "px)";
    imageLis[idx].style.webkitTransform = "translateX(0px)";
    imageLis[prev].style.webkitTransform = "translateX(" + -windowWidth + "px)";

}


//  手指移动的时候
function touchMoveHandler(ev) {
    // 阻止默认事件
    ev.preventDefault();

    // 移动的x坐标位置
    var clientX = ev.touches[0].clientX;
    // console.log(clientX)
    // console.log(clientX, ev.changedTouches[0].clientX)

    // 移动的距离
    var moveLine = clientX - deltaX;
    console.log(moveLine);
    imageLis[idx].style.webkitTransform = "translateX(" + (moveLine) + "px)";
    imageLis[next].style.webkitTransform = "translateX(" + (windowWidth + moveLine) + "px)";
    imageLis[prev].style.webkitTransform = "translateX(" + (-windowWidth + moveLine) + "px)";
}
// 当手指抬起的时候
function touchEndHandler(ev) {
    ev.preventDefault();
    // console.log(ev)


    // 手指滑动的距离
    var distance = ev.changedTouches[0].clientX - startX
    if (distance >= windowWidth / 2) {
        console.log("像右滑动成功")

        next = idx;
        idx = prev;

        prev--;
        if (prev < 0) {
            prev = 4;
        }

        imageLis[idx].style.transition = "all 0.5s ease 0s";
        imageLis[next].style.transition = "all 0.5s ease 0s";

        imageLis[idx].style.webkitTransform = "translateX(0px)";
        imageLis[next].style.webkitTransform = "translateX(" + windowWidth + "px)";

    } else if (distance <= -windowWidth / 2) {
        showNext()
    } else {
        console.log("滑动不成功")


        imageLis[idx].style.transition = "all 0.5s ease 0s";
        imageLis[prev].style.transition = "all 0.5s ease 0s";
        imageLis[next].style.transition = "all 0.5s ease 0s";


        imageLis[prev].style.webkitTransform = "translateX(" + -windowWidth + "px)";
        imageLis[idx].style.webkitTransform = "translateX(0px)";
        imageLis[next].style.webkitTransform = "translateX(" + windowWidth + "px)";
    }

}

function showNext() {
    prev = idx;
    idx = next;
    next++;

    if (next > 4) {
        next = 0;
    }
    // console.log(prev)

    imageLis[next].style.transition = "none";
    imageLis[next].style.webkitTransform = "translateX(" + windowWidth + "px)";;

    imageLis[idx].style.transition = "all 0.5s ease 0s";
    imageLis[prev].style.transition = "all 0.5s ease 0s";


    imageLis[idx].style.webkitTransform = "translateX(0px)";
    imageLis[prev].style.webkitTransform = "translateX(" + -windowWidth + "px)";

    // console.log("像左滑动成功")
}

var timer = setInterval(function() {
    showNext();
}, 3000)
