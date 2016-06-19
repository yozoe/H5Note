/**
 * Created by wangdong on 16/5/6.
 */
/*
1.块级作用域
用let避免生成全局变量
 */
'use strict'
if (true) {
    let x = 'hello';
}

const constStr =  123;


/*
2.全局常量和线程安全
 在let和const之间，建议优先使用const，尤其是在全局环境，不应该设置变量，只应设置常量。这符合函数式编程思想，有利于将来的分布式运算。
 */

const [a, b, c] = [1, 2, 3];

//console.log(a + ' ' + b + ' ' + c);

/*

 */
const d = 'foobar';
const e = `foo${d}bar`;
const f = 'foobar';

console.log(e);