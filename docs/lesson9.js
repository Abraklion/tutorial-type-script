"use strict";
// Высходящие преобразование
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
var Page = /** @class */ (function () {
    function Page(title) {
        this.title = title;
    }
    Page.prototype.getTitle = function () {
        return this.title;
    };
    return Page;
}());
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(slider, title) {
        var _this = _super.call(this, title) || this;
        _this.slider = slider;
        return _this;
    }
    return Index;
}(Page));
function getPageTitle(page) {
    return page.getTitle();
}
var index = new Index('slider', 'Index');
console.log(getPageTitle(index));
//# sourceMappingURL=lesson9.js.map