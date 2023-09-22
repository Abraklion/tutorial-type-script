
// Высходящие преобразование

// class Page {
//   title: string
//
//   constructor(title: string) {
//     this.title = title
//   }
// }
//
// class Index extends Page {
//   slider: string
//
//   constructor(slider: string, title: string) {
//     super(title);
//     this.slider = slider
//   }
// }
//
// function getPageTitle(page: Page) : string {
//   return page.title
// }
//
// function renderPage(title : string) : Page {
//   return new Index('slider', title)
// }
//
// let index : Index = new Index('slider New', 'home')
// let title : string = getPageTitle(index)
// console.log(title)
//
// let about : Page = renderPage('About')
// let titleAbout : string = getPageTitle(about)
// console.log(titleAbout)


// Нисходящие преобразование (ручное преобразование)

// class Page {
//   title: string
//
//   constructor(title: string) {
//     this.title = title
//   }
// }
//
// class Index extends Page {
//   slider: string
//
//   constructor(slider: string, title: string) {
//     super(title);
//     this.slider = slider
//   }
// }
//
//
// let index : Page = new Index('slider', 'home')
//
// let index0 : Index = <Index> index;
// let index01 : Index = index as Index;
//
// console.log(index0, index01)
//
// console.log((<Index> index).slider)
// console.log((index as Index).slider)
//
// console.log(index01)


// Интерфейсы

// interface IPage {
//   title: string
//
//   getTitle() : string
// }
//
//
// class Page {
//   title: string
//
//   constructor(title: string) {
//     this.title = title
//   }
//
//   getTitle() : string {
//     return this.title
//   }
// }
//
// class Index extends Page {
//   slider: string
//
//   constructor(slider: string, title: string) {
//     super(title);
//     this.slider = slider
//   }
// }
//
// function getPageTitle(page: IPage) : string {
//   return page.getTitle()
// }
//
// let index : Index = new Index('slider','Index')
//
// console.log(getPageTitle(index))


// Явное определение интерфейсов

interface IPage {
  title: string

  getTitle() : string
}


class Page implements IPage {
  title: string

  constructor(title: string) {
    this.title = title
  }

  getTitle() : string {
    return this.title
  }
}

class Index extends Page {
  slider: string

  constructor(slider: string, title: string) {
    super(title);
    this.slider = slider
  }
}

function getPageTitle(page: IPage) : string {
  return page.getTitle()
}

let index : Index = new Index('slider','Index')

console.log(getPageTitle(index))


export {}
