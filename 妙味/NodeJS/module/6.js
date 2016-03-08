/**
 * Created by Administrator on 2016/3/8.
 */

/*
__filename : 返回当前模块文件的解析后的绝对路径,该属性其实并非全局的,而是模块作用域下的
__dirname : 返回当前模块文件所在目录解析后的绝对路径,该属性也不是全局的,而是模块作用域下的
 */

//console.log(__filename);
//console.log(__dirname);

//var d = new Date();
//var arr = new Array(1,2,3);

setInterval(function(){
    var d = new Date();
    console.log(d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());
}, 1000);
