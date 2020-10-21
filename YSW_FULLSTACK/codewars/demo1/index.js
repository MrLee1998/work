// function strcompare(str) {
//     if (str.length > 140) {
//         return false
//     } else if (str.length == 0) {
//         return true
//     }
// }
// function generateCapitalStringWithHashTag(str) {
//     return (str.length > 140) || (typeof str === 'undefined' || str == '' || str == null) ?
//         false : '#' + str.split(' ').map(function(word) {
//             console.log(word);
//             // return word.replace(word[0], word[0].toUpperCase())
//             return word.charAt(0).toUpperCase() + word.slice(1) // slice  从第n 个开始获取字符
//         }).join(' ') // map   es6 数组的新方法 遍历每个元素,并用一个函数处理 ，返回新的数组


// }

function generateCapitalStringWithHashTag(str) {
    return (str.length > 140) || (typeof str === 'undefined' || str == '' || str == null) ?
        false : '#' + str.split(' ').map(capitalize).join('')
}

function capitalize(str) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}
console.log(generateCapitalStringWithHashTag(''));