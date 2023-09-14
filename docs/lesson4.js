"use strict";
// Пример 1
Object.defineProperty(exports, "__esModule", { value: true });
function func(a, b) {
    // code function
    return a + b;
}
console.log(func(1, 100));
// Пример 2
var c = function (a, b) {
    return a + b;
};
console.log(c(2, 100));
// Пример 3
var j;
var w = function (a, b) {
    j = a + b;
};
w(3, 10);
console.log(j);
// Пример 4
var d = function (a, b, c) {
    console.log(c);
    return a + ' ' + b;
};
console.log(d(4, 20));
// Пример 5
var v = function (a, b, c) {
    if (c === void 0) { c = 'По умолчанию'; }
    console.log(c);
    return a + ' ' + b;
};
console.log(v(5, 20));
// Пример 6
function f1() {
    return "\u041F\u0440\u0438\u0432\u0435\u0442 \u043C\u0438\u0440";
}
var l = function (a, b, c) {
    if (c === void 0) { c = f1(); }
    console.log(c);
    return a + ' ' + b;
};
console.log(l(6, 20));
// Пример 7
var h = function (a, b) {
    var c = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        c[_i - 2] = arguments[_i];
    }
    for (var i = 0; i < c.length; i++) {
        console.log(c[i]);
    }
    return a + ' ' + b;
};
console.log(h(7, 20, 1, 2, 3));
//# sourceMappingURL=lesson4.js.map