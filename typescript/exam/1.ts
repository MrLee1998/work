export type User = {  //数据类型
  name: string,
  age: number,
  occupation: string
}
// interface  和 type 都是声明自定义类型的
export const users: User[] = [
  {
    name: 'Max Mustermann',
    age: 24,
    occupation: 'Chimny sweep'
  },
  {
    name: 'Kate MUller',
    age: 23,
    occupation: 'Ason'
  }
]

export function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`)
}

users.push({
  name: 'lz',
  age: 23,
  occupation: 'mr'
})
console.log('Users:')
users.forEach(logPerson)
