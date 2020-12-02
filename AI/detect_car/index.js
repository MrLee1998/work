const fs = require('fs');
const AipImageClassifyClient =  require('baidu-aip-sdk').imageClassify
const App_ID = "23082447";
const Api_KRY = "y4XHKfsfNhUCXGADpOtUqW35";
const Secret_KEY = "r8wMEl8rjQH076BMh2nVb4yfYS890ocS"; 
// sync I/O Async 同步
const image = fs.readFileSync("./kv3.jpg").toString("base64");
// console.log(image)
const client = new AipImageClassifyClient(App_ID, Api_KRY, Secret_KEY);
// http协议
client.carDetect(image).then((result) => {
  console.log(result);
  console.log(result.result);
}).catch( err => {
  console.log(err);
})