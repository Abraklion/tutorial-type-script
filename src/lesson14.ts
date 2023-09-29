/// <reference path="global.d.ts" />

class User {
  static printGlobalVar() {
    console.log(someVar);
    printSomeVar();

    for(let i = 0; i < users.length; i++) {
      console.log('User -  id'+ users[i].id + " name - " + users[i].name);
    }
  }
}

window.onload = () => {
  User.printGlobalVar();
}



