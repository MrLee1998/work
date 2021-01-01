const fs = require('fs');
fs.readFile('./1.html','utf-8',(err, con)=> {
  console.log(con);
})

function readFile(cb) {
  setTimeout(() => {
    cb('hello word')
  }, 2000)
}
readFile((c)=> {
  console.log(c);
})