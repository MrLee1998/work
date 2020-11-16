// var reverse = function(x) {
//     if(x<0){
//         let num = Math.abs(x)
//         let arr = []
//         while(num>10){   
//         arr.push(num%10)  
//         num = Math.floor(num/10)
//     }
//     }
//     let arr = []
//     while(num>10){   
//         arr.push(num%10)  
//         num = Math.floor(num/10)
//     }
//     arr.push(num)
//    console.log(arr);
// };
// let x = -123
// // console.log(reverse(x));
// reverse(x)
var reverse = function(x) {
    let result = 0;
    while(x !== 0) {
        result = result * 10 + x % 10;
        x = (x / 10) | 0;
        console.log(result);
    }
    
    return (result | 0) === result ? result : 0;
};
let x = -123
console.log(reverse(x));