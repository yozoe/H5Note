///**
// * Created by wangdong on 16/3/15.
// */
//
//var val = 'smtg';
//
//console.log("value is " + (val === 'smtg') ? 'Something' : 'nothing');
//
//
//var a = "value is " + (val === 'smtg') ? 'Something' : 'nothing';
//
//
//var b = [3,2,1].reduce(Math.pow);
//console.log(b);
//
//console.log(Math.pow(2,1));
//
//var arr = [1,2,3,4,5];
//var sum = arr.reduce(function (x, y) {
//    console.log(x + ' ' + y);
//    return x + y;
//});
//console.log(sum);
//
//var end = Math.pow(2,53);
//var start = end - 100;
//var count = 0;
//for (var i = start; i < end; i++) {
//    count++;
//}
//
//console.log(count)

var arr = [0, 1, 2];
arr[10] = 10;

arr.filter(function(x) {
    console.log(x);
   return x === undefined;
});