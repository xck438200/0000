/*
var a1="学";
var a2="得";
var a3="不";
var a4="好";
var a5="就";
var a6="要";
var a7="多";
var a8="敲";
var a9="代";
var a10="码";
var ppx1=[a1,a2,a3,a4,a5,a6,a7,a8,a9,a10]
var ppx2=ppx1.join();
console.log(ppx2);

var a11=[1,2,3,4,5];
var a12=a11.join('');
console.log(typeof(a11));
console.log(a11);
console.log(a12);
console.log(typeof(a12));

var arr1=[1,2,3,4,5];
var arr2=arr1.toString();//toString()后面的括号必须带上
console.log(arr2);


var q1=['明','日','复','明','日'];
var q2=['明','日','何','其','多'];
//var q3=q1.concat(q2).join('');
//console.log('12',q3);
//console.log(typeof(q3));
var q3=q1.slice();
console.log(q3);
q4=q1.indexOf('明',1);
console.log(q4);*/

/*   输入邮箱地址返回用户名和域名
var email=prompt("请输入你的邮箱地址:");
var k=email.indexOf("@");
console.log('用户名:'+email.slice(0,k));
console.log("域名:"+email.slice(k+1));


var arr1=['明','日','复','明','日'];
var arr2=arr1.sort();
console.log(arr1);
console.log(typeof(arr1));
console.log(arr2);
console.log(typeof(arr2));

var str1=[1,2,3,4,5,6,7,8,9];
var str2=str1.splice(2,7,5,6);
//var str3=str1.splice(1,3,3);
//var str4=str1.splice(1,3,"你","好");
console.log(str1);
//console.log(str2);
//console.log(str3);
//console.log(str4);*/




/*var arr2048=[
        [1,2,3,4],
        [11,22,33,44],
        [111,222,333,444],
        [1111,2222,3333,4444]
    ];
console.log(arr2048[3][2]);
console.log(arr2048.join(""));


var str="你猜\n\"我猜不猜\"";
console.log(str);
var q="好好学习\n天天向上";
console.log(q);
console.log(q[-1]);
console.log(q.charAt(2));*/

/*
var qq="123456789";
console.log(qq.substring(2,8));
console.log(qq.substr(1,4));
console.log(qq.indexOf(7,1));
console.log(qq.slice(3));


var email=prompt("请输入你的邮箱地址");
var i=email.indexOf("@");
console.log("用户名:"+email.slice(0,i));
console.log("域名:"+email.slice(i+1));
*/

/*var say="no zuo no die";
function fun(){
	var a1=say.split(" ");
	
	console.log(say.toUpperCase());
}*/

/*
var q1="qwertyuiop";
var q2=q1.split("");
q2.reverse();
var q3=q2.join("");
console.log(q1+"->"+q3);


//console.log(parseInt(Math.random()*100));

var z1=[1,2,3,4,5];
//z1.push(3,2);
//z1.pop(1,2,3,4,5,6);
//z1.unshift(1,2,3)
z1.shift('')
console.log(z1);*/

/*输入一个数字输出他的二进制数
var num=prompt("请输入一个数字");
function fun(num){
	var b=[];
	while(num>0){
		b.unshift(num%2);
		num=parseInt(num/2);
	}
	return b.join('');
}
console.log(fun(num));
*/
/*输入字符串反转输出
var zx=prompt("请输入字符串");
function fun(zx){
	return zx=zx.split('').reverse().join("");
}
console.log(zx);
console.log(fun(zx));*/

/* 输入字符串首字母大写
var zs=prompt("请输入字符串");
function fun1(zs){
	var arr=zs.split(" ");
	for(var i=0;i<arr.length;i++){
		arr[i]=arr[i][0].toUpperCase()+arr[i].slice(1);
	}
	return arr.join(' ');
}
console.log(fun1(zs));*/

/*
var q1="no can no bb";
var q2=q1.split(" ");
console.log(q2);*/

var as1="what are you doing now";
var as2=as1.split(' ');
console.log(as1);
console.log(as2);

console.log(Math.round(2.1));
console.log(Math.ceil(2.1));
console.log(Math.floor(2.1));
console.log(Math.max(2.1,3.5));
console.log(Math.min(2.1,9.8));
var arr=[1,2,3,4,5,6,7,8,9];
console.log(Math.max.apply(Math,arr));
console.log(Math.min.apply(Math,arr));
console.log(Math.random()*100);



/*
var arr1=[1,2,3,4,5];
var arr2=arr1.toString();
console.log(typeof(arr1));
console.log(typeof(arr2));
*/

//slice  splice  split



var hq=Array();
var redLen=hq.length;
while(redLen<6){
　var ball=ranNumber(1,33);
　var qqq= true;
　for(var j=0;j<redLen;j++){
　if(hq[j]==ball){
　　　qqq=false;
　　　break;
　　}
　}
　if(qqq){
　　if(ball<10){
　　　hq.push("0"+ball);
　　}else{
　　　hq.push(ball);
　　}
　}
　redLen = hq.length;
}
hq.sort();
var lq = ranNumber(1,16);
if(lq<10){
　lq = "0"+lq;
}
function ranNumber(a,b){
　var q1 = parseFloat(a);
　var q2 = parseFloat(b);
　return Math.floor(Math.random()*(q2-q1)+q1);
}
console.log("红色球:"+hq.join(",")+" "+"蓝色球:"+lq);