/**
 * Created by wangdong on 16/4/19.
 */

var http = require('http');

var options = {
    hostname: 'localhost',
    port: '8080',
    path: 'hello'
}

http.request(options, function (response) {
    console.log('nimabi');
    response.on('data', function (chunk) {
       console.log(123);
    });
});