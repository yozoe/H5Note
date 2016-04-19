/**
 * Created by wangdong on 16/4/19.
 */

var http = require('http');

http.createServer(function (req, res) {
    res.write('hehe');
    res.end('hehe');
}).listen(8080);