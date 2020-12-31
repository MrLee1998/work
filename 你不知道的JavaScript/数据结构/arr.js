// const arr = [1, 2, 3, 4]
// const arr = []
// const arr = new Array()

// const arr = new Array(7).fill(1)
// console.log(arr);

// fill的入参如果是引用类型， 那么填充值的时候就是入参的引用

// const arr = new Array(7).fill([]) // [] 的地址是同一个
// arr[0][0] = 1
// console.log(arr);


const arr = new Array(7)
const len = arr.length
for(let i=0; i< len; i++) {
  arr[i] = []
}
console.log(arr);