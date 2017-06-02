/**
 * Created by user on 2017/5/24.
 */
//注册账号并把数据传给后端
$("#login").click(function () {
    $.post({
        url : 'http://lc.shudong.wang/api_user.php',
        dataType : 'json',
        data : {status:'register',username:$("#mobile").val(),password:$("#pwd").val()},
        success : function (data) {
            console.log(data);
            if (data.code === 0){
                console.log("注册成功");
                window.location.href = "login.html?username="+$("#mobile").val();
            }else if (data.code === 2001){
                $("#mobile").text("该用户名已存在")
            }else if (data.code === 2000){
                alert("注册过期,请刷新网页")
            }else if (data.code === 1001){
                alert("密码格式不正确")
            }else if (data.code === 1000){
                alert("用户名格式错误")
            }else {
                alert("服务器繁忙,请稍候再试")
            }
        }
    })
});