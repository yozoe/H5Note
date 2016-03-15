/**
 * Created by Administrator on 2016/3/14.
 */

define(function(require,exports,module){
    var oInput = document.getElementById('input1');
    var oDiv1 = document.getElementById('div1');
    var oDiv2 = document.getElementById('div2');
    var oDiv3 = document.getElementById('div3');

    require('./drag.js').drag(oDiv3);
});