// const ceo = {
//   name: 'ceo',
//   age: 19,
//   carrer: 'coder'
// }
// const angel = {
//   name: 'angel',
//   age: 19,
//   carrer: 'coder'
// }

function User(name, age, carrer, work) {
  this.name = name
  this.age = age
  this.carrer = carrer
  this.work = work
}

function Coder(name, age) {
  this.name = name
  this.age = age
  this.carrer = 'coder'
  this.work = ['打代码', '打代码', '还是打代码']
}
function ProductManager(name, age) {
  this.name = name
  this.age = age
  this.carrer = 'Product-Manager'
  this.work = ['订会议室', '写prd', '催更']
}

function Factory(name, age, career) {
  let work;
  switch(career) {
    case 'coder':
      work = ['打代码', '打代码', '还是打代码']
      break
    case 'Product-Manager':
      work = ['订会议室', '写prd', '催更']
      break
    default:
      break 
  }
  return new User(name, age, carrer, work)
}
console.log(Factory('name', 'age', 'coder'));