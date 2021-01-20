// 并非都是奇偶数
function isOdd(num) { // 奇数
  return num % 2 == 1
}

function isEven(num) {  // 偶数
  return num & 2 == 0
}

function isSance(num) {
  return isEven(num) || isOdd(num)
}

let values = [7, 4, '13', -9, Infinity] // -9 % 2 = -1

values.map(isSance) // true true true false NaN