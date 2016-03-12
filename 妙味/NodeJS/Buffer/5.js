/**
 * Created by Administrator on 2016/3/9.
 */

/*
类方法,静态方法
 */

/*
console.log(Buffer.isEncoding('utf-8'));
console.log(Buffer.isEncoding('gbk'));

var arr = [1,2,3];
var bf = new Buffer(10);

console.log(Buffer.isBuffer(arr));
console.log(Buffer.isBuffer(bf));

var str1 = 'miaov';
console.log(str1.length);
console.log(Buffer.byteLength(str1));

var str2 = '妙味';
console.log(str2.length);
console.log(Buffer.byteLength(str2, 'ascii'));



var str1 = 'miaov';
var str2 = '妙味';

var list = [new Buffer(str1), new Buffer(str2)];
console.log(list);

//直接给totallength效率高
var bf = Buffer.concat(list, 11);
console.log(bf);

*/

process.stdout.write('请输入内容:');
process.stdin.resume();
process.stdin.on('data', function(chunk) {
    console.log(chunk.toString());
});