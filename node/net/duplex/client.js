const net = require('net')

const socket = new net.Socket({})

socket.connect({
  host: '127.0.0.1',
  port: 4000
})


// socket.write('good morning lz')

const lessonids = [
  136797,
  136798,
  136799,
  136800,
  136801,
  136803,
  136804,
  136806,
  136807,
  136808,
  136809,
  141994,
  143517,
  143557,
  143564,
  143644,
  146470,
  146569,
  146582
]

let seq = 0
//  编码buffer数据流
function encode(index) {
  buffer = Buffer.alloc(6)
  buffer.writeInt16BE(seq)
  console.log(seq, lessonids[index]);
  seq++
  buffer.writeInt32BE(lessonids[index], 2)
  return buffer
}
let index = Math.floor(Math.random() * lessonids.length)
let buffer = Buffer.alloc(6)
buffer.writeInt32BE(
  lessonids[index] 
)
index = Math.floor(Math.random() * lessonids.length)
socket.write(encode(index))

//  接受到服务器往socket管道里添加的内容
socket.on('data', (buffer) => {
  const seqBuffer = buffer.slice(0, 2)
  const titleBuffer = buffer.slice(2)
  // console.log(seqBuffer, titleBuffer);
  console.log(seqBuffer.writeInt16BE(), titleBuffer.toString());
  index = Math.floor(Math.random() * lessonids.length)
  socket.write(encode(index))
})

// setInterval(() => {
//   index = Math.floor(Math.random() * lessonids.length)
//   socket.write(encode(index))
// }, 50)

for(let i = 0; i < 100; i++) {
  index = Math.floor(Math.random() * lessonids.length)
  socket.write(encode(index))
}
