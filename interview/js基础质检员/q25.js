function foo() {}
var oldName = foo.name

foo.name = 'bar'

console.log([oldName, foo.name]); // ['foo', 'foo']
// 函数名是静止被修改的