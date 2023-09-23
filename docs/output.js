var Pages;
(function (Pages) {
    var Page = /** @class */ (function () {
        function Page(title) {
            this.title = title;
        }
        return Page;
    }());
    Pages.Page = Page;
    function renderPage() {
        console.log('Page');
    }
    Pages.renderPage = renderPage;
    Pages.defaultPage = { title: 'Home' };
    var Inner;
    (function (Inner) {
        Inner.name = 'Николай';
    })(Inner = Pages.Inner || (Pages.Inner = {}));
    console.log(Inner.name + '\n');
})(Pages || (Pages = {}));
/// <reference path="someModule.ts" />
var index = new Pages.Page('Hello');
console.log(index);
var innerModal = Pages.Inner;
console.log(innerModal.name);
var names = Pages.Inner.name;
console.log(names);
//# sourceMappingURL=output.js.map