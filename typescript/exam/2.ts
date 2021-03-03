interface User {
  name: string,
  age: number,
  hooby: string
}

interface Admin {
  name: string,
  age: number,
  role: string
}

export type Person = User | Admin // 联合声明

export const persons: Person[] = [
  {
    name: 'lz',
    age: 23,
    hooby: 'sleep'
  },
  {
    name: 'lz',
    age: 24,
    role: 'sleep1'
  },
  {
    name: 'lz',
    age: 25,
    hooby: 'sleep2'
  }
]



export function logPerson(user: Person) {
  console.log(` - ${user.name}, ${user.age}`)
}

persons.forEach(logPerson)