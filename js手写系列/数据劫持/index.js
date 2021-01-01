// let obj = {}
// Object.defineProperty(obj, 'num', {
//   // 数据描述
//   // value: 1,
//   // wtitable: true, 
//   // 属性描述
//   enumerable: true, 
//   configurable: true,
//   // 存储描述
//   // // getter
//   get: undefined,
//   // // setter
//   set: function(val) {

//   }
// })
// console.log(obj);

let newObj = { num: 1 }, value = null;

Object.defineProperty(newObj, 'num', {
  get: function () {
    console.log('get 操作');
    return value
  },
  set: function (newValue) {
    console.log('set操作');
    value = newValue
  }
})

newObj.num = 2
console.log(newObj.num);
console.log(newObj);

function Archiver() {
  let newObj = { num: 1 }, value = null;
  let archive = [];
  Object.defineProperty(newObj, 'num', {
    get: function () {
      console.log('get 操作');
      return value
    },
    set: function (newValue) {
      console.log('set操作');
      value = newValue
      archive.push({val: newValue})
    }
  })
  this.getArchive = function() {
    return archive;
  }
}
let arc = new Archiver()
arc.num // get
arc.num = 2 //set
arc.getArchive()