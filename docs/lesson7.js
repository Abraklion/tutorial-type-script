"use strict";
// Пример 1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// class Human {
//
//   constructor(public age: number, public name: string) {
//     // при такой записи конструктора не надо писать
//     // this.age = age
//     // this.name = name
//     // ts все сделает за вас
//   }
//
//   getInfo() : void {
//     console.log('Name - ' + this.name)
//   }
// }
//
// class Administrator extends Human {
//   // можно не вызывать родительский конструктор
//   // ts все сделает за вас
// }
//
//
// let admin : Administrator = new Administrator(20, 'Николай')
//
// admin.getInfo()
// Пример 2
// class Human {
//
//   protected role : string
//
//   constructor(public age: number, public name: string) {
//     // при такой записи конструктора не надо писать this.age = age this.name = name
//     // ts все сделает за вас
//   }
//
//   getInfo() : void {
//     console.log('Name - ' + this.name)
//   }
// }
//
// class Administrator extends Human {
//
//   constructor(age: number, name: string, public lastname: string) {
//     super(age, name);
//   }
//
//   getInfo() {
//     super.getInfo();
//     console.log('Lastname - ' + this.name)
//   }
//
//   getRole() {
//     console.log('Role - ' + this.role)
//   }
//
//   setRole(name : string) {
//     this.role = name
//   }
// }
//
// let admin : Administrator = new Administrator(20, 'Николай', 'Кузнецов')
//
// admin.getInfo()
// admin.setRole('Админ')
// admin.getRole()
// Пример 3
var Human = /** @class */ (function () {
    function Human(age, name) {
        this.age = age;
        this.name = name;
    }
    return Human;
}());
var Administrator = /** @class */ (function (_super) {
    __extends(Administrator, _super);
    function Administrator(age, name, role) {
        var _this = _super.call(this, age, name) || this;
        _this.role = role;
        return _this;
    }
    Administrator.prototype.getInfo = function () {
        console.log('Name - ' + this.name);
        console.log('Role - ' + this.role);
    };
    return Administrator;
}(Human));
var admin = new Administrator(20, 'Николай', 'Админ');
admin.getInfo();
//# sourceMappingURL=lesson7.js.map