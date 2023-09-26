// Пример 1
function getTitle(title) {
    return title;
}
var res1 = getTitle('Hello');
var res2 = getTitle(10);
// Пример 2
function getName(arr) {
    return arr.toString();
}
var res3 = getName([1, 2, 3]);
console.log(res3);
// Пример 3
// class Page<T> {
//   title : T
//
//   constructor(title : T) {
//     this.title = title
//   }
//
//   getTitle(): T {
//     return this.title
//   }
// }
//
// let res4 = new Page<string>('Home')
// console.log(res4.title)
// res4 = new Page<number>(2)
// Пример 4
// interface IPage<T> {
//   getTitle(): T
// }
//
// class Page<T> implements IPage<T>{
//   title : T
//
//   constructor(title : T) {
//     this.title = title
//   }
//
//   getTitle(): T {
//     return this.title
//   }
// }
//
// let res5 = new Page<string>('Home')
// console.log(res5.title)
// Пример 5
// interface IPage {
//   getTitle(): void
// }
//
// class Page implements IPage {
//   protected title : string
//
//   constructor(title : string) {
//     this.title = title
//   }
//
//   getTitle(): void {
//     console.log(this.title)
//   }
// }
//
// class Index extends Page {
//
//   getTitle() : void {
//     console.log('Index ' + this.title)
//   }
// }
//
// class CommonInfo<T extends IPage> {
//   getPageInfo(page: T) : void {
//     page.getTitle();
//   }
// }
//
// let res6 = new Index('Home')
// let res7 = new CommonInfo()
// res7.getPageInfo(res6)
// Пример 6
var Page = /** @class */ (function () {
    function Page(title) {
        this.title = title;
    }
    Page.prototype.getTitle = function () {
        console.log(this.title);
    };
    return Page;
}());
function pageRender(param, title) {
    return new param(title);
}
var page = pageRender(Page, 'New title');
console.log(page);
//# sourceMappingURL=lesson11.js.map