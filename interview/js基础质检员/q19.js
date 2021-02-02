let a = 3
console.log(a.toString());
console.log(3..toString());
// 3.toString() => (3.)toString  // error
// 3..toString() => (3.).toString  '3'
// 3...toString() => (3.)..toString error