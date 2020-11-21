// let arr = [1,2,3,5,2,3,1,6]
// let newArr = [...new Set(arr)]
// console.log(newArr);

// function test(color) {
//     switch (color) {
//         case 'red':
//             return ['apple', 'strawberry']
//         case 'yellow':
//             return  ['banana', 'pear']
//         case 'green':
//             return ['watermelon']
//         default: 
//             return []
//     }
// }
// console.log(test('yellow'));

// const fruitColor = {
//     red: ['apple', 'strawberry'],
//     yellow: ['banana', 'pear'],
//     green: ['watermelon']
// }
const fruitColor = new Map()
    .set('red',['apple', 'strawberry'])
    .set('yellow',['banana', 'pear'])
    .set('green',['watermelon'])
function test(color) {
    return  fruitColor.get(color) || []
}
console.log(test('yellow'));