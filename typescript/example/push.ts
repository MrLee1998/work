let arr = [1,'ui','ds',2]
console.log(arr.length);
arr.push(1)
console.log(arr);
console.log(arr.length);
 
// 回调函数
arr.forEach(function (index, item) {
    console.log('索引', index, '元素为', item);
    
})