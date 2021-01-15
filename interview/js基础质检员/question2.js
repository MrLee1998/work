console.log([typeof null, null instanceof Object] );// 显示结果 object false

console.log([[3, 2, 1].reduce(Math.pow), [].reduce(Math.pow)] );// 该数组展示结果 9 error

//  [3, 2, 1].reduce(Math.pow) 3 ** 2 ** 1 = 9