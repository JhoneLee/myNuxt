/*
* @Author: liyunjiao2048@163.com
* @Date:   2019-03-04 11:52:52
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2019-03-15 11:34:06
*/

/*eslint-disable*/

var br = require('@babel/register');

var babelConfig = {
  "presets": [
    // ["@babel/env"]  node 9、10 版本没必要用
  ],
  "plugins": [
    "@babel/plugin-syntax-dynamic-import",
    ["@babel/plugin-proposal-object-rest-spread",{ "loose": true, "useBuiltIns": true }],
    "@babel/plugin-transform-modules-commonjs",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-async-to-generator"
  ]
};

br(babelConfig);

require('./server');