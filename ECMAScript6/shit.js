/**
 * Created by wangdong on 16/7/26.
 */
'use strict';
// node直接运行ES6代码时，如使用了ES6的一些关键字，比如let，就需要严格模式，否则会报错
// 这是没有严格模式时候的错误提示
// SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode


function* fibs() {// Generator Function
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        // [a, b] = [b, a + b];
        b = a + b;
        a = b - a;
        a = b - a;
    }
}
let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(first, second, third, fourth, fifth, sixth);