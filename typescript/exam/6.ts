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
  { type: 'user', name: 'l1', age: 23, occupation: 'we'},
  { type: 'admin', name: 'l2', age: 23, role: 'we1'},
  { type: 'user', name: 'l3', age: 25, occupation: 'we'},
  { type: 'admin', name: 'l4', age: 25, role: '1e'}
]

export function isAdmin(person: Person):person is Admin {
  return person.type === 'admin'
  
}

export function isUser(person: Person):person is User {
  return person.type === 'user'
}

export function logPerson(person: Person) {
  console.log(`- ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`);
}

export function filterUsers(persons: Person[], personType: string, criteria: Partial<Person>): Person[] {
  return persons.filter((person) => person.type === personType).filter((person) => {
    const criteriaKeys = Object.keys(criteria) as (keyof Person)[]
    return criteriaKeys.every((filedName) => {
      return person[filedName] === criteria[filedName]
    })
  })
}

export const usersAge23 = filterUsers(persons, 'user', { age: 23 })
export const adminsAge23 = filterUsers(persons, 'admin', { age: 23 })

console.log('User of age 23:');
usersAge23.forEach(logPerson)

console.log('admin of age 23:');
adminsAge23.forEach(logPerson)
