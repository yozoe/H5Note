/**
 * Created by wangdong on 16/3/31.
 */
function repeat(n, action) {
    for (var i = 0; i < n; i++) {
        action();
    }
}

function benchmark() {
    var start = [], end = [], timings = [];
    repeat(1000, function () {
        start.push(Date.now());
        end.push(Date.now());
    });
    for (var i = 0, n = start.length; i < n; i++) {
        timings[i] = end[i] - start[i];
    }
    return timings;
}

var result = benchmark();
console.log(result);