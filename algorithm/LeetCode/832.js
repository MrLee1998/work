let a = [[1,1,0],[1,0,1],[0,0,0]]
let r = a.map( x => x.map(y => + !y))
r.map( res => res.reverse())
console.log(r);