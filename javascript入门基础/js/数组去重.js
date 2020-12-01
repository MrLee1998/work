let arr = [1, 1, 2, '1']
console.log([...new Set(arr)]);
function unique1(arr) {
  return Array.from(new Set(arr))
}
console.log(unique1(arr));
function unique2(arr) {
  for(let i=0; i<arr.length; i++) {
    for(let j=i+1; j<arr.length; j++) {
      if( arr[i] == arr[j]){
        arr.splice(j,1);
        j--;
      }
    }
  }
  return arr
}
console.log(unique2(arr));  // 数组 '1' 被转化为Number类型 
function unique3(arr) {
  if(!Array.isArray(arr)){
    console.log('type error');
    return
  }
  let array = [];
  for(let i=0;i<arr.length;i++){
    if(array.indexOf(arr[i]) === -1){
      array.push(arr[i])
    }
  }
  return array
}
console.log(unique3(arr));  // 字符串类型被转换成Number
function unique4(arr) {
  if(!Array.isArray(arr)){
    console.log('type error');
    return
  }
  arr = arr.sort()
  var array = [arr[0]]
  for(let i=0;i<arr.length;i++){
    if(arr[i] !== arr[i-1]){
      array.push(arr[i])
    }
  }
  return array
}
console.log(unique4(arr));


function unique5(arr) {
  if(!Array.isArray(arr)){
    console.log('type error');
    return
  }
  var array = []
  var obj = {}
  for(let i=0;i<arr.length;i++){
    if(!obj[arr[i]]) {
      array.push(arr[i])
      obj[arr[i]] = 1
    }
    else {
      obj[arr[i]]++
    }
  }
  return array
}
console.log(unique5(arr));

function unique6(arr) {
  if(!Array.isArray(arr)){
    console.log('type error');
    return
  }
  var array = []
  for(let i=0;i<arr.length;i++){
    if(!array.includes(arr[i])){
      array.push(arr[i])
    }
  }
  return array
}
console.log(unique6(arr));

function unique7(arr) {
  var obj = {}
  return arr.filter(function(item, index, arr){
    return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
  })
}
console.log(unique7(arr)); // [1, 2]

function unique8(arr) {
  return arr.filter(function(item, index, arr){
    return arr.indexOf(item, 0) === index
  })
}
console.log(unique8(arr));

function unique9(arr) {
  var array = arr;
  var len = array.length;
  array.sort( function(a,b){
    return a - b
  })
  function loop(index) {
    if(index >= 1) {
      if(array[index] === array[index - 1]){
        array.splice(index, 1)
      }
      loop(index - 1)
    }
  }
  loop(len - 1)
  return array
}
console.log(unique9(arr));

function unique10(arr) {
  let map = new Map();
  let array = new Array();
  for(let i=0; i<arr.length; i++) {
    if(map.has(arr[i])) {
      map.set(arr[i], true)
    }
    else {
      map.set(arr[i], false);
      array.push(arr[i]);
    }
  }
  return array
}
console.log(unique10(arr));


function unique11(arr) {
  return arr.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], []);
}
console.log(unique11(arr));