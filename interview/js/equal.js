// 1 == '1'
// 1. 两者类型是否相同  相同比大小
// 2. 类型不同， 那么就进行类型转换
// 3. 会先判断是否对比null和undefined， 是的话返回true
// 4. 判断两者是否是number和string类型 ， 是的话字符串转为number类型
// 5. 判断其中一方是否为Boolean值 ， 是的话就把Boolean转为number
// 6. 判断其中一方是否为object， 且另一方为string ， number ，Symbol 是的话就把object转化为原始类型进行比较
console.log([] == 0);
console.log(![]);
console.log(Boolean([]));
// [] == [] 引用类型是判断指针是否相同


// [] == ![]
// [] ==!true
// [] == false
// [] == 0
// '' == 0
//  0 == 0