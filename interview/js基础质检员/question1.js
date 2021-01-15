// parseInt map 
console.log(['1', '2', '3'].map((a, b) => a + b))
console.log(['1', '2', '3'].map(parseInt)); // 1 NaN NaN
console.log(parseInt('1', 0));
console.log(parseInt('1', 10));
console.log(parseInt('2', 1));
console.log(parseInt('3', 2));
