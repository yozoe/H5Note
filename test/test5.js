/**
 * Created by wangdong on 16/4/15.
 */
//for (var i = 1; i <= 3; i++) {
//    setTimeout(function () {
//        console.log(i);
//    }, 1000);
//}
//;

//var obj = {}; console.log(obj); obj.foo = 'bar';
var fireCount = 0;
var start = new Date;
var timer = setInterval(function() {
    if (new Date-start > 1000) { clearInterval(timer); console.log(fireCount); return;
    }
    fireCount++;
}, 0);