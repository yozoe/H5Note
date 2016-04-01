/**
 * Created by wangdong on 16/4/1.
 */
var temp = new Date();
//console.log(temp);
//console.log(temp.toLocaleDateString() + ' ' + temp.toLocaleTimeString().slice(2));
var regex = /\//g;
var hehe = (temp.toLocaleDateString() + ' ' + temp.toLocaleTimeString().slice(2)).replace(regex,'-');
//console.log(hehe);

//console.log(null instanceof Object);
//console.log(typeof null);

console.log(Object.prototype.toString.call(null));