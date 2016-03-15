/**
 * Created by Administrator on 2016/3/14.
 */



define(function(require,exports,module){ //sea下的参数 : 不允许修改的
    //exports : 对外提供接口的对象
    function show() {
        alert(1);
    }
    exports.show = show;
});

