var transpose = function(A) {
    let len = A.length
    let B=[]
    for(let i in A){
       for(let j in A[i]){
           if(!B[i]){
               B[i] =[]
           }
           B[i][j]=A[j][i]
       }
   }
   return B
  
};
let A= [[1,2,3],[4,5,6],[7,8,9]]
console.log(transpose(A));