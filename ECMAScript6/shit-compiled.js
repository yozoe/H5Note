/**
 * Created by wangdong on 16/7/26.
 */
'use strict';
// node直接运行ES6代码时，如使用了ES6的一些关键字，比如let，就需要严格模式，否则会报错
// 这是没有严格模式时候的错误提示
// SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _marked = [fibs].map(regeneratorRuntime.mark);

function fibs() {
    var a, b;
    return regeneratorRuntime.wrap(function fibs$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    // Generator Function
                    a = 0;
                    b = 1;

                case 2:
                    if (!true) {
                        _context.next = 10;
                        break;
                    }

                    _context.next = 5;
                    return a;

                case 5:
                    // [a, b] = [b, a + b];
                    b = a + b;
                    a = b - a;
                    a = b - a;
                    _context.next = 2;
                    break;

                case 10:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var _fibs = fibs();

var _fibs2 = _slicedToArray(_fibs, 6);

var first = _fibs2[0];
var second = _fibs2[1];
var third = _fibs2[2];
var fourth = _fibs2[3];
var fifth = _fibs2[4];
var sixth = _fibs2[5];

console.log(first, second, third, fourth, fifth, sixth);

//# sourceMappingURL=shit-compiled.js.map