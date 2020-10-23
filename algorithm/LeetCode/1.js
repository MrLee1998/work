function judge(str) {
    var array = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
            array.push('(');
        } else if (str[i] === ')') {
            if (array.length === 0) {
                return false
            } else {
                array.pop()
            }
        } else if (str[i] === '}') {
            if (array.length === 0) {
                return false
            } else {
                array.pop()
            }
        } else if (str[i] === ']') {
            if (array.length === 0) {
                return false
            } else {
                array.pop()
            }
        } else {
            continue;
        }
    }
    return array.length === 0
}
console.log(judge('({adda})'));