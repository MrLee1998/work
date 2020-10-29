var fun = function(str) {

    let i = 0,
        j = str.length - 1;
    while (i < j) {
        if (!/[0-9a-zA-Z]/.test(str[i])) {
            i++;
            continue; // 跳过  从头开始
        }
        if (!/[0-9 a-z A-Z]/.test(str[j])) {
            j--;
            continue; // 跳过  从头开始
        }
        let left = str[i],
            right = str[j];
        if (left.toLowerCase() !== right.toLowerCase()) {
            // return false
            console.log('it is false');
            return
        }
        i++;
        j--;

    }
    // return true
    console.log('ii');
}
let str = '1221';
fun(str)