
// Пример 1

function getTitle <T>(title: T) : T {
  return title
}

let res1 = getTitle<string>('Hello')
let res2 = getTitle<number>(10)


// Пример 2

function getName <T> (arr: Array<T>) : string  {
  return arr.toString()
}

let res3 = getName<number>([1,2,3])
console.log(res3)


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

class Page {
  protected title : string

  constructor(title : string) {
    this.title = title
  }

  getTitle(): void {
    console.log(this.title)
  }
}

function pageRender<T>(param: { new (title: string): T }, title: string) : T {
  return new param(title)
}

let page: Page = pageRender(Page,'New title')
console.log(page)


