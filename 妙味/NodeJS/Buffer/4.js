/**
 * Created by Administrator on 2016/3/9.
 */

var bf = new Buffer('miaov');
console.log(bf);

/*
var bf2 = bf.slice(2);
console.log(bf2);
bf2[0] = 2;
console.log(bf2);
console.log(bf);
*/

/*
var bf4 = new Buffer(10);
bf.copy(bf4);
console.log(bf4);
bf4[0] = 2;
//bf不受影响
console.log(bf4);
console.log(bf);
*/