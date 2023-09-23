namespace Pages {

  export class Page {
    title : string

    constructor(title: string) {
      this.title = title
    }
  }

  export interface IPage {
    title : string
  }

  export function renderPage () {
    console.log('Page')
  }

  export let defaultPage = {title: 'Home'}


  export namespace Inner {

    export let name = 'Николай'

  }

  console.log(Inner.name + '\n')
}


