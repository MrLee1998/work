// var a = 1;
// a = 'hello word'
// // console.log(a);
// function num(m) {
//     if (m === 0) {
//         // ...
//         console.log(m);
//     } else if (m === 1) {
//         // ...
//         console.log(m);
//     } else if (m === 2) {
//         // ...
//         console.log(m);
//     } else {
//         // ...
//         console.log(m);
//     }
// }
// num(4)
// function num(x) {
//     switch (x) {
//         case 1:
//             console.log('x 等于1');
//             break;
//         case 2:
//             console.log('x 等于2');
//             break;

//         default:
//             console.log('x 等于其他值');
//             break;

//     }
// }
// num(4)
// function num(n) {
//     var even = (n % 2 === 0) ? true : false;
//     console.log(even);
// }
// num(6)
for (var i = 0; i < 3; i++) {
    console.log('true');
    for (var j = 0; j < 3; j++) {
        if (i === 1 && j === 1) continue;
        console.log('i=' + i + ', j=' + j);
    }
}