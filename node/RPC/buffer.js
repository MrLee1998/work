// const buffer1 = Buffer.from('wn')
// const buffer2 = Buffer.from([1, 2, 3, 4])

// const buffer3 = Buffer.alloc(5)
 
// console.log(buffer1);
// console.log(buffer2);
// console.log(buffer3);

// buffer2.writeInt8(12, 1)
// console.log(buffer2);
// buffer2.writeInt16LE(512, 2)
// console.log(buffer2);

const fs = require('fs')
const  protobuf = require('protocol-buffers')


const schema = protobuf(fs.readFileSync(__dirname + '/buffer.proto', 'utf-8'))
console.log(schema);

const  buffer = schema.Clomn.encode({
  id: 1,
  name: 'Node',
  price: 80.4
})
console.log(buffer)

const buffered = schema.Clomn.decode(buffer)
console.log(buffered);



