// 引入 http模块
/*
  request: 获取url传过来的信息
  response： 给浏览器响应信息
 */
var http = require('http')
http.createServer(function(request, response) {
  // 设置响应头
  response.writeHead(200, {'Content-Type': 'text/plain'})
  //  输出  并结束响应
  response.end('Hello word  nihao 11')
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');