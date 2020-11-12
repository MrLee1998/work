// 斐波那契数列
// 0 1 2 3 4 5 6 7  8
// 0 1 1 2 3 5 8 13 21
// Bigint 类型 可以超过Number最大值
function fib(n) {
    let arr = [0n,1n]
    if( n <= 1 ){
        return arr[n]
        
    }
    for(let i=2; i<n+1; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    console.log(arr);
    console.log(arr[n]);
}
fib(100000)
// 1682题