var removeDuplicateLetters = function(s) {
  var arr = [];
  for(let i=0;i<s.length; i++) {
    var str = s[i]
    if(arr.indexOf(str) !== -1) {
      continue;
    }
    // indexOf 第二个参数是查找的起始位置
    while(arr[arr.length-1]>str&&s.indexOf(arr[arr.length-1], i)>i) {
      arr.pop();
    }
    arr.push(str)
  }
  return arr.join('')
}
let s = 'abdcdbb'
console.log(removeDuplicateLetters(s));