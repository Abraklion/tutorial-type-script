/* Переменные по TypeScript */
var a = 'Николай'; // -> строка
var b = 32; // -> число
var c = true; // -> логический
var g = undefined; // -> не определено (по умолжанию к любому типу данных)
g = null; // -> присваевается к любому типу данных
var s = null; // -> ничего (по умолжанию подходит к любому типу данных)
s = undefined; // -> присваевается к любому типу данных
var array = ['Привет', 'Мир']; // -> массив строкового типа v1
var arrayV2 = ['Привет', 'Мир']; // -> массив строкового типа v2
var array2 = [10, 2.5]; // -> массив числового типа
var array2V2 = [10, 2.5]; // -> массив числового типа v2
var cort = ['Мир', 1]; // -> кортеж
var x = 'Николай'; // -> любой тип данных
x = 10;
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var Days;
(function (Days) {
    Days["Monday"] = "Hello";
    Days["Tuesday"] = "Word";
})(Days || (Days = {}));
//# sourceMappingURL=lesson2.js.map