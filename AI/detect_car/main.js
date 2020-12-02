const fs = require('fs');
const AipOcrClient =  require('baidu-aip-sdk').ocr
const App_ID = "23083147";
const Api_KRY = "zGbGgaEa5QUuCMaIUCgZgcQZ";
const Secret_KEY = "c1PUCcPWhWFf3Vgk5QzZpGqECc5UaQW7"; 

const image = fs.readFileSync("./pic.jpg").toString("base64");
const options = {}
options["multi_detect"] = "true";

// console.log(image)
const client = new AipOcrClient(App_ID, Api_KRY, Secret_KEY);
// http协议
client.licensePlate(image, options).then((result) => {
  console.log(result);
  // console.log(result.result);
}).catch( err => {
  console.log(err);
})