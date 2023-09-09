var Human = /** @class */ (function () {
    /**
     * Конструктор
     * @param {string} name - Имя
     * @param {number} age - Возраст
     */
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    return Human;
}());
var user = new Human('Николай', 30);
console.log(user);
//# sourceMappingURL=app.js.map