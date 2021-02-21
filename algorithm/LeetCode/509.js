var fib = function(n) {
  let F = []
  F[0] = 0
  F[1] = 1
  for(let i = 2; i <= n; i++) {
    F[i] = F[i - 1] + F[i - 2]
  }
  return F[n]
};

let n = 3
console.log(fib(n));