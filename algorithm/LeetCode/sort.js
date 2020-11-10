let arr = [1,2,5,1,5,7,4,-2]
//a:4 b:5  负
//a:5 b:4 正
// 两两比较 排序:
arr.sort((a,b)=>{
    return a-b
})
console.log(arr);
function compare(str1,str2) {
    let arr1 = str1.split('.'),
        arr2 =str2.split('.')
    let len =Math.max(arr1.length,arr2.length)
    for(let i = 0; i<len ;i++){
        let a = arr1[i] ? arr1[i]:0
        let b = arr2[i] ? arr2[i]:0
        a = Number(a)
        b = Number(b)
        if(a>b){
            return 1
        }
        else if(a<b) {
            return -1
        }
    }
    return 0  
    // 按位对其
    //
}