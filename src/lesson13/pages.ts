export interface IPage {
  name: string;
}

export default class Page implements IPage {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export  function getPageName(page : Page) : void {
  console.log(page.name);
}
