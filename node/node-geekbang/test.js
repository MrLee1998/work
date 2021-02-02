
const user = {
  name: '哈哈',
  age: '<script src="xxx"></script>'
}

const result = `<h2>${user.name}</h2>`
const vm = require('vm')

const templateMap = {
  templateA: '`<h2>${include("templateB")}</h2>`',
  templateB: '`<p>哈哈哈</p>`'
}

const context = {
  include: function(name) {
    return templateMap[name]()
  },
  hepler: function() {

  },
  _: function (markup) {
    if(!markup) return ''
    return String(markup)
      .replace(/&/g, '&amp;')
      .replace(/ /g, '&nbsp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/\r{0,}\n/g, '<br/>')
  }
}
Object.keys(templateMap).forEach(key => {
  const temp = templateMap[key]
  templateMap[key] = vm.runInNewContext(`
  (function() {
    return ${temp}
  });`, context)
})
console.log(templateMap['templateA']());
// vm.runInNewContext('`<h2>${user.name}</h2>`', {user})
// console.log(vm.runInNewContext('`<h2>${include("subtemplatename")}</h2>`',
//   {
//     user,
//     context
//   }));

// const template = '<h2><%=user.name %></h2>'
// ejs.render(template, user)
