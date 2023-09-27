class Page {
  getContent(): void {
    console.log('Page content');
  }
}

class Menu {
  items: Array<string> = [];

  getMenu(): void {
    if(this.items.length == 0) {
      console.log("No items");
    }
    else {
      this.items.forEach(function(item, index) {
        console.log("#" + index + ":" + item);
      });
    }
  }
}

class Home implements Page, Menu {
  items: Array<string> = [];

  getContent:() => void;
  getMenu:() => void;
}

function apply (mixinClass: any, classes: any[]) {
  classes.forEach(item => {
    Object.getOwnPropertyNames(item.prototype).forEach(name => {
      mixinClass.prototype[name] = item.prototype[name];
    });
  });
}

apply(Home, [Page, Menu]);

let homePage: Home = new Home();
homePage.items = ['Home','About','Contacts'];
homePage.getContent();
homePage.getMenu();


