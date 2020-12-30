var maximumWealth = function(accounts) {
  let i = 0, j;
  let res = 0;
  while(i < accounts.length) {
    sum = 0;
    j =0 ;
    while(j < accounts[i].length) {
      sum += accounts[i][j]
      j++;
    }
    i++;
    
    res = res > sum ? res : sum
  }
  return res
};

let accounts = [[1,2,3],[3,2,1]];


console.log(maximumWealth(accounts));