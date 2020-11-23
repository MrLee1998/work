const http = require('http')
const fs = require('fs')
// const { Socket } = require('socket.io')
// const { info } = require('console')
// 搭建一个web服务
var server = http.createServer(function(req, res) {
    if(res.url !== '/favicon.ico') {
        res.writeHead(200, {"Content-type": "text/html"})
        const myReadStream = fs.createReadStream(__dirname + '/views/index.html', 'utf-8')
        myReadStream.pipe(res)
    }
})
var io = require('socket.io')(server)
io.on('connection',function(socket){
    //申明一个io的使用
    console.info('一个socket连接成功')
    socket.on('link_to_server', (msg) => {
        console.info(`i hava a problem ${msg}`)
        //响应客户端
        io.emit('link_to_client', msg)
    })
})
server.listen(8888, () => {
    console.log('server has runned');
})