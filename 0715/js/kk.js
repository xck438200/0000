//点击个人信息跳转页面
$(".kk-li-msg") .click(function(){
    window.location.href='personal-message.html'
})
//点击我的优惠券跳转页面
$(".kk-li-coupons") .click(function(){
    window.location.href='mycoupon.html'
})
// 点击修改登录密码跳转页面
$(".kk-li-changePwd") .click(function(){
    window.location.href='change-psd.html'
})
// 匹配密码正则
// ^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$