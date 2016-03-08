/**
 * Created by Administrator on 2016/3/8.
 */
/*
一个文件就是一个模块
每个模块都有自己的作用域

我们使用var来申明一个变量，他并不是全局的，而是属于当前模块下
 */

/*
var a = 100;
console.log(a);

global.a = 200;

console.log(a);
console.log(global.a);
*/

//__filename : 当前文件被解析过后的绝对路径
//console.log(__filename);

/*
模块加载系统

require('模块')
 */

//require('./2.js');

/*
模块加载机制：
路径
绝对路径
相对路径
 */

//require('2.js');  //不要这么用,加载node中的核心模块,或者是node_modules

/*
1.首先按照加载的模块的文件名进行查找
2.如果没有找到,则会在模块文件名称后加上.js的后缀,进行查找
3.如果还没有找到,则会在文件名称后加上.json的后缀,进行查找
4.如果还没有,则会在文件名称后加上.node的后缀,进行查找
 */

//require('./2');

//require('./3');


