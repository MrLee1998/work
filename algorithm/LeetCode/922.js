var sortArrayByParityII = function(A) {
    let arr1 = [],
        arr2 = [];
    let len = A.length
    for(let i=0;i<len;i++){
          (A[i]%2==0) ? arr1.push(A[i]):arr2.push(A[i])
    }
    A = []
    for(let i=0;i<len;i++){
        (i%2==0)? A[i]=arr1.pop():A[i]=arr2.pop()
    }
    return A
};
let A = [3,5,4,2]
console.log(sortArrayByParityII(A));