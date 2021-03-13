export function a() {}
export function b() {}

import { a, b } from './a.js'

export default function() {

}

import xxx from './b.js'

// CommonJs
// CommonJs 是node独有的规范， 浏览器中使用的就需要 Browerify 解析



//  AMD 
  // 是由Require.js提出
  define([
    './a',
    './b'
  ], function(a, b) {
    a.do()
    b.do() 
  });