"use strict";
// Перегрузка функции
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 15));
console.log(sum('Привет', 'Мир'));
// Тип функции
var action;
function f1(a, b) {
    return a + b;
}
function f2(a, b) {
    return a * b;
}
action = f1;
console.log(action(10, 10));
action = f2;
console.log(action(10, 10));
// Тип функции 2
function f3(a, b, callback) {
    return callback(a, b);
}
console.log(f3(100, 10, function (x, y) {
    return "".concat(x, " + ").concat(y, " = ").concat(x + y);
}));
function f4(x, y) {
    return "".concat(x, " + ").concat(y, " = ").concat(x + y);
}
console.log(f3(100, 100, f4));
// Стрелочные функции
var f5 = function (a, b) {
    return a + b;
};
console.log(f5(100, 100));
//# sourceMappingURL=lesson5.js.map