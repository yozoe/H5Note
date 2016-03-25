/**
 * Created by Administrator on 2016/3/24.
 */
function id(obj) {
    return document.getElementById(obj);
}

function bind(obj, ev, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(ev, fn, false);
    } else {
        obj.attachEvent('on' + ev, function() {
            fn.call(obj);
        });
    }
}

function view() {
    return {
        w : document.documentElement.clientWidth,
        h : document.documentElement.clientHeight
    };
}

function addClass(obj, sClass) {
    var aClass = obj.className.split(' ');
    if (!obj.className) {
        obj.className = aClass;
        return;
    }
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) return;
    }
    obj.className += ' ' + sClass;
}

function removeClass(obj, sClass) {
    var aClass = obj.className.split(' ');
    if (!obj.className) return;
    for (var i = 0; i < aClass.length; i++) {
        if (aClass === sClass) {
            aClass.slice(i, 1);
            obj.className = aClass.join(' ');
            break;
        }
    }
}