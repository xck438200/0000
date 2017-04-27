function getStyle(obj, attr) { 
	if(obj.currentStyle){ 
		return obj.currentStyle[attr]; 
	}else{ 
		return getComputedStyle(obj,false)[attr];
	} 
} 
function startMove(obj,json,fn) {//obj:操作对象，json最终效果
	obj.timer=setInterval(function() {
		for (attr in json) {
			//获取当前的属性值
			var iCur=parseInt(getStyle(obj,attr));
			document.title=iCur;
			//给运动速度
			var speed=(json[attr]-iCur)/8;
			speed>0?speed=Math.ceil(speed):speed=Math.floor(speed);
			//判断
			if(iCur==json[attr]){
				clearInterval(obj.timer);
				if (fn) {
					fn();
				}
			}else{
				obj.style[attr]=(iCur+speed)+"px";
			}
		}
	},30)
}

