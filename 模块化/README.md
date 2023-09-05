# node的模块化机制默认遵循CommonJS规范
目录中有一个 package.json 文件，则这个 Node 模块的入口就是其中 main 字段指向的文件；
目录中有一个名为 index 的文件，扩展名为 .js、.node 或 .json，此文件则为模块入口文件。

# require 导入模块
// 导入内置库或第三方模块
const os = require('os');
const express = require('express');

// 通过相对路径导入其他模块
const utils = require('./utils');

// 通过绝对路径导入其他模块
const utils = require('/home/xxx/MyProject/utils');

# exports 导出模块


# module 模块对象

id：模块的唯一标识符，如果是被运行的主程序（例如 main.js ）则为 .，如果是被导入的模块（例如 myModule.js ）则等同于此文件名（即下面的 filename 字段）
path 和 filename：模块所在路径和文件名，没啥好说的
exports：模块所导出的内容，实际上之前的 exports 对象是指向 module.exports 的引用。例如对于 myModule.js ，刚才我们导出了 add 函数，因此出现在了这个 exports 字段里面；而 main.js 没有导出任何内容，因此 exports 字段为空
parent 和 children：用于记录模块之间的导入关系，例如 main.js 中 require 了 myModule.js ，那么 main 就是 myModule 的 parent，myModule 就是 main 的 children
loaded：模块是否被加载，从上图中可以看出只有 children 中列出的模块才会被加载
paths：这个就是 Node 搜索文件模块的路径列表，Node 会从第一个路径到最后一个路径依次搜索指定的 Node 模块，找到了则导入，找不到就会报错

module myModule: Module {
  id: 'F:\\node-demo\\模块化\\myModule.js',
  path: 'F:\\node-demo\\模块化',
  exports: { add: [Function: add] },
  filename: 'F:\\node-demo\\模块化\\myModule.js',
  loaded: false,
  children: [],
  paths: [
    'F:\\node-demo\\模块化\\node_modules',
    'F:\\node-demo\\node_modules',
    'F:\\node_modules'
  ]
}

module main: Module {
  id: '.',
  path: 'F:\\node-demo\\模块化',
  exports: {},
  filename: 'F:\\node-demo\\模块化\\main.js',
  loaded: false,
  children: [
    Module {
      id: 'F:\\node-demo\\模块化\\myModule.js',
      path: 'F:\\node-demo\\模块化',
      exports: [Object],
      filename: 'F:\\node-demo\\模块化\\myModule.js',
      loaded: true,
      children: [],
      paths: [Array]
    }
  ],
  paths: [
    'F:\\node-demo\\模块化\\node_modules',
    'F:\\node-demo\\node_modules',
    'F:\\node_modules'
  ]
}


