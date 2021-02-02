// const count = ref(2)

// count.value = 3


// 泛型

// 类型变量 就是泛型
type Value<T> = T

type NumberValue = Value<number>

function returnItem<T>(name: any): any {
  return name
}

console.log(returnItem('hello'));


function foo<T>(num: Array<T>) {
  console.log(num.length);
  return num 
}

foo([1, 2])


// 反向推导

function create<T>(val: T): T {
  return val
}

let num: number
const c = create(num)

// 索引签名

type Test = {
  foo: number,
  bar: string
}

type N = Test['foo'] // number


// 条件类型
type isNumber<T> = T extends number ? 'yes' : 'no'

type A = isNumber<2> // yes
type B = isNumber<'3'> // no

type typeName<T> = T extends string ? 'string' 
: T extends boolean ? 'boolean' : 'object'

type T0 = typeName<string> // string
type T1 = typeName<'a'> // string

//keyof
//是ts中用来获取对象key值的集合的


type Obj = {
  foo: number,
  bar: string
}
type Keys = keyof Obj // 'foo' | 'bar'

type Copy = {
  [K in keyof Obj]: Obj[K]
}

// infer 条件类型中的类型推断