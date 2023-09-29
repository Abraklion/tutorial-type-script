/// <reference path="global.d.ts" />
var User = /** @class */ (function () {
    function User() {
    }
    User.printGlobalVar = function () {
        console.log(someVar);
        printSomeVar();
        for (var i = 0; i < users.length; i++) {
            console.log('User -  id' + users[i].id + " name - " + users[i].name);
        }
    };
    return User;
}());
window.onload = function () {
    User.printGlobalVar();
};
//# sourceMappingURL=lesson14.js.map