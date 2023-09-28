define("pages", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getPageName = void 0;
    var Page = /** @class */ (function () {
        function Page(name) {
            this.name = name;
        }
        return Page;
    }());
    exports.default = Page;
    function getPageName(page) {
        console.log(page.name);
    }
    exports.getPageName = getPageName;
});

define("app", ["require", "exports", "pages"], function (require, exports, pages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var page = new pages_1.default('title');
    (0, pages_1.getPageName)(page);
    console.log(page);
});

require(["app","pages"], (app,pages) => {
  // code from window.onload
  console.log(pages)
});
//# sourceMappingURL=output.js.map
