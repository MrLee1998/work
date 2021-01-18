const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core')

const getModeleInfo = (file) => {
  const body = fs.readFileSync(file, 'utf-8')
  const ast = parser.parse(body, {
    sourceType: 'module'
  })
  // console.log(ast.program.body);

  //  依赖收集
  const deps = {}
  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = path.dirname(file) // index.js 绝对路径
      // console.log(dirname);
      const adspath = './' + path.join(dirname,node.source.value)
      // console.log(adspath);
      deps[node.source.value] = adspath.split(path.sep).join('/');
      // .replace('\/\\/g', '/');
    }
  })
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  })
  // console.log(code);
  const moduleInfo = {file, deps, code}
  return moduleInfo
}
// 递归所有模块
const parseModules = (file) => {
  const entry = getModeleInfo(file)
  const temp = [entry]
  const depsGraph = {}

  for(let i = 0; i < temp.length; i++) {
    const deps = temp[i].deps
    if(deps) {
      for(const key in deps) {
        if(deps.hasOwnProperty(key)) {
          temp.push(getModeleInfo(deps[key]))
        }
      }
    }
  }
  //  格式化数据
  temp.forEach(moduleInfo => {
    depsGraph[moduleInfo.file] = {
      code: moduleInfo.code,
      deps: moduleInfo.deps
    }
  })
  console.log(depsGraph); // '路径': { code, deps}
  return depsGraph
} 

//  处理require exports
const bundle = (file) => {
  const depsGraph = JSON.stringify(parseModules(file))
  return `(function(graph) {
    function require(file) {
      function absRequire(relPath) {
        return require(graph[file].deps[relPath])
      }

      var exports = {};

      (function(require, exports, code) {
        eval(code)
      })(absRequire, exports, graph[file].code)

      return exports
    }
    require('${file}')
  })(${depsGraph})`
}

const content = bundle('./src/index.js')
console.log(content);

fs.mkdirSync('./dist')
fs.writeFileSync('./dist/index.js', content)