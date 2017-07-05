// 需求：
// 提交的信息写在 / static / 调查结果.md 文件当中
// 姓名： 王树东 快慢： 刚刚好 留言： 再快一点

var http = require('http');
var fs = require('fs');
var querystring = require('url');
var urlLib = require('url');

var user = {'姓名':'王树东','快慢':'刚刚好','留言':'再快一些'}
const server = http.createServer(function(req,res) {
    var str = '';
    var obj = urlLib.parse(req.url,true);
    const url = obj.pathname;
    const GET = obj.query;
    
})
server.listen(9527);