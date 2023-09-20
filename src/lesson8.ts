
// Пример 1

// interface  IPage {
//   readonly id: number
//   title: string
//   auth?: string
//
//   getPageTitle(prefix : string) : string
// }
//
// let index: IPage = {
//   id : 1,
//   title: 'Index',
//
//   getPageTitle(prefix: string): string {
//     return prefix + ' ' + this.title
//   }
// }
//
// console.log(index)
// console.log(index.getPageTitle('Page'))
//
// function getPageTitle(page: IPage) : string {
//   return page.title
// }
//
// console.log(getPageTitle(index))


// Пример 2

// interface  IPage {
//   readonly id: number
//   title: string
//   auth?: string
//
//   getPageTitle(prefix : string) : string
// }
//
//
// class Index implements IPage {
//   readonly id: number;
//   title: string;
//
//   constructor(id: number, title: string) {
//     this.id = id
//     this.title = title
//   }
//
//   getPageTitle(prefix: string): string {
//     return prefix + ' ' + this.title;
//   }
//
// }
//
// let index: Index = new Index(2,'Page')
// console.log(index.getPageTitle('Страница'))


// Пример 3

// interface  IPage {
//   readonly id: number
//   title: string
//
//   getPageTitle(prefix : string) : string
// }
//
// interface Authable {
//   auth: string
// }
//
// class Index implements IPage, Authable {
//   readonly id: number;
//   title: string;
//
//   auth: string;
//
//   constructor(id: number, title: string) {
//     this.id = id
//     this.title = title
//   }
//
//   getPageTitle(prefix: string): string {
//     return prefix + ' ' + this.title;
//   }
// }
//
// let index: Index = new Index(2,'Page')
// console.log(index.getPageTitle('Страница'))


// Пример 4

// interface IExtendedPage {
//   menu: string
// }
//
// interface  IPage extends IExtendedPage{
//   readonly id: number
//   title: string
//
//   getPageTitle(prefix : string) : string
// }
//
// class Index implements IPage {
//   readonly id: number;
//   title: string;
//
//   menu: string;
//
//   constructor(id: number, title: string) {
//     this.id = id
//     this.title = title
//   }
//
//   getPageTitle(): string {
//     return this.title;
//   }
// }
//
// let index: Index = new Index(2,'Page')
// console.log(index.getPageTitle())


// Пример 5

// interface FuncFoo {
//   (title: string): string
// }
//
// let foo: FuncFoo = (title: string) => {
//   return title
// }
//
// console.log(foo('Николай'))


// Пример 6

// interface indexArray {
//   [index: number] : string
// }
//
// let strings: indexArray
//
// strings = ['a', 'b', 'c']
//
// console.log(strings[1])


// Пример 7

// interface numberObject {
//   [index: string] : number
// }
//
// let strings: numberObject = {}
//
// strings['one'] = 1
// strings['two'] = 2
//
// console.log(strings['two'])
































export {}
