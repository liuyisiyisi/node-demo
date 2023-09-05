// main.js

//const myModule = require('./myModule');

// 调用 myModule.js 中的 add 函数
//console.log(myModule.add(1, 2));


//ECMAScript 6 中的解构赋值
const { add } = require('./myModule');
console.log(add(1, 2));
console.log('module main:', module);