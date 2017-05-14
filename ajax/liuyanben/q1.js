/**
 * Created by user on 2017/5/13.
 */
var oBtn = null;
var oForm = null;
var oText = null;
var oTextarea = null;
var timer = null;
var speed = 0;
var oLi = null
var oH3 = null;
var oP = null;
window.onload = function()
{
    oBtn = document.getElementById("btn");
    oBtn.onclick = getValue;
};
function getValue()
{
    document.getElementById("message_text").style.display = "block";
    oForm = document.getElementsByTagName("form")[0];
    oText = document.getElementById("text");
    oTextarea = document.getElementsByTagName("textarea")[0];
    oUl = document.getElementById("message_text").getElementsByTagName("ul")[0];
    oForm.onsubmit = function(){ return false; };
    if( oText.value == "" || oTextarea.value == "" )
    {
        alert("就二个框，你还不写全了啊？");
        return;
    }
    oLi = document.createElement("li");
    oH3 = document.createElement("h3");
    oP = document.createElement("p");
    oH3.innerHTML = oText.value;
    oP.innerHTML = oTextarea.value;
    if(oUl.childNodes[0])
    {
        oUl.insertBefore(oLi,oUl.childNodes[0]);
    }
    else
    {
        oUl.appendChild(oLi);
    }
    oLi.appendChild(oH3);
    oLi.appendChild(oP);
    oText.value = "";
    oTextarea.value = "";
    var h = oLi.offsetHeight;
    oLi.style.height = '0px';
    if(timer)
    {
        clearInterval(timer);
    }
    timer = setInterval("goTime("+h+")", 35);
    goTime(h);
}
function goTime(target)
{
    var top = oLi.offsetHeight;
    speed += 3;
    top += speed;
    if(top > target)
    {
        top = target;
        speed *= -0.7;
    }
    if(top===target && Math.abs(speed) < 3)
    {
        clearInterval(timer);
        timer = null;
        oLi.style.height = target + "px";
    }
    oLi.style.height = top + "px";
}