/**
 * Created by wangdong on 16/2/20.
 */
function startMove(obj, json, fn) {
    clearInterval(obj.iTimer);

    var iCur = 0;
    var iSpeed = 0;

    obj.iTimer = setInterval(function(){

        var iBtn = true;

        //定时器每走一下,就要把运动的属性都推进一次

        for (var attr in json) {

            //什么时候停止定时器?所有属性都运动到了目标点的时候

            var iTarget = json[attr];

            if (attr == 'opacity') {
                iCur = Math.round(css(obj, 'opacity') * 100);//标准0.3, ie0.3
            } else {
                //去掉单位
                iCur = parseInt(css(obj, attr));
            }

            iSpeed = (iTarget - iCur) / 8;

            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

            if (iCur != iTarget) {
//                            clearInterval(obj.iTimer);
                iBtn = false;
                if (attr == 'opacity') {
                    obj.style.opacity = (iCur + iSpeed) / 100;
                    obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')';
                } else {
                    obj.style[attr] = iCur + iSpeed + 'px';
                }
            }
        }

        //在这里看下,所有属性是不是都到了目标点

        if (iBtn) {
            clearInterval(obj.iTimer);
            fn && fn.call(obj);
        }

    }, 30);
}

function css(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}