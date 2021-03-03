interface User {
  type: 'user',
  name: string,
  age: number,
  occupation: string
}

interface Admin {
  type: 'admin',
  name: string,
  age: number,
  role: string
}

export type Person = User | Admin

export const persons: Person[] = [
  { type: 'user', name: 'l1', age: 25, occupation: 'we'},
  { type: 'admin', name: 'l1', age: 25, role: 'we1'},
  { type: 'user', name: 'l1', age: 25, occupation: 'we'},
  { type: 'admin', name: 'l1', age: 25, role: '1e'}
]

export function isAdmin(person: Person):person is Admin {
  return person.type === 'admin'
  
}

export function isUser(person: Person):person is User {
  return person.type === 'user'
}

export function logPerson(person: Person) {
  let additionalInfomation: string = ''
  if (isAdmin(person)) {
    additionalInfomation = person.role
  }
  if (isUser(person)) {
    additionalInfomation = person.occupation
  }
  console.log(`- ${person.name}, ${person.age}, ${additionalInfomation}`);
}

console.log('Admin:');
persons.filter(isAdmin).forEach(logPerson)

console.log('User:');
persons.filter(isUser).forEach(logPerson)
