/**
 * Created by wangdong on 16/3/15.
 */
(function (window, document, undefined) {
    var _aniQueue = [],
        _baseUID = 0,
        _aniUpdateTimer = 13,
        _aniID = -1,
        isTicking = false;

    window.animateManager = function (optios) {
        this.context = optios;
    }

    animateManager.prototype = {

        init: function () {
            this.start(this.context);
        },

        stop: function (_e) {
            clearInterval(_aniID);
            isTicking = false;
        },

        start: function (optios) {
            if (optios) this.pushQueue(optios);
            if (isTicking || _aniQueue.length === 0) return false;
            this.tick();
            return true;
        },

        tick: function () {
            var self = this;
            isTicking = true;
            _aniID = setInterval(function () {
                if (_aniQueue.length === 0) {
                    self.stop();
                } else {
                    var i = 0;
                    _aniLen = _aniQueue.length;
                    for (; i < _aniLen; i++) {
                        _aniQueue[i] && self.go(_aniQueue[i], i);
                    }
                }
            }, _aniUpdateTimer);
        },

        go: function () {
            var n = this.now();
        },

        aniEffect: function () {

        },

        goCallBack: function () {

        },

        pushQueue: function (options) {

        },

        delQueue: function () {

        },

        now: function () {

        },

        getUID: function (_e) {

        },

        setUID: function (_e, _v) {

        }

    };

})(window, document);