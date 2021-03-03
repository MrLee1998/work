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

export type Person = User | Admin

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

export function logPerson(person: Person) {
  // let additionalInfomation: string;
  // if((<Admin>person).role) { //类型断言
  //   additionalInfomation = (<Admin>person).role
  // } else {
  //   additionalInfomation = (<User>person).hooby
  // }

  let additionalInfomation: string;
  if('role' in person) {  // 类型收缩
    //  person 会自动推导为Admin
    additionalInfomation = person.role
  } else {
    //  person 会自动推导为User
    additionalInfomation = person.hooby
  }
  console.log(`- ${person.name}, ${person.age}, ${additionalInfomation}`);
}

persons.forEach(logPerson)