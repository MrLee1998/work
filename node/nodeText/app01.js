const http  = require('http')
const url = require('url')

// var api = 'http://127.0.0.1:3000/login/?name=zhangsan&age=20'

// var temp = url.parse(api, true).query
// console.log(temp);
http.createServer((req, res) => {
  
  res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"})
  res.write("<head><meta charset='utf-8'></head>") // 解决乱码
  // res.write('hello 年后')
  console.log(req.url);
  if(req.url != '/favicon.ico') {
    var info = url.parse(req.url, true).query
    console.log(`nihao ${info.name}`);
  } 
  res.end()
}).listen(3000)

console.log('Server running at http://127.0.0.1:3000/');
