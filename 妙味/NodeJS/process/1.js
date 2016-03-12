/**
 * Created by Administrator on 2016/3/8.
 */

//console.log(process);
//console.log(global.process);

//console.log(process.argv);

//console.log(process.env);

//console.log(process.pid);
//console.log(process.title);

//process.stdout.write('呵呵');

//默认情况下输入流是关闭的,要监听处理输入流的数据,首页要开启输入流
process.stdin.resume();

process.stdout.write('请输入A的值:');

var a;
var b;

//用于监听用户的输入数据
process.stdin.on('data', function (chunk) {
    if (!a) {
        a = Number(chunk);
        process.stdout.write('请输入b的值:');
    } else if (!b) {
        b = Number(chunk);
        process.stdout.write('结果是:' + (a + b));
    }
});