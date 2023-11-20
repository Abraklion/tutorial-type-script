
// Пример 1 (Декоратор замараживает конструктор и прототип)

// function classDecorator(constructor: Function, context: any) {
//     console.log(constructor);
//     Object.seal(constructor);
//     Object.seal(constructor.prototype);
// }
//
// @classDecorator
// class User {
//
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//
//     printName() : void {
//         console.log(this.name);
//     }
//
// }
//
// Object.defineProperty(User, 'password', {
//     value: 'password'
// });


// Пример 2 (Декоратор переопределяет родительский конструктор)

function addConsole<CFunction extends Function>(constructor: CFunction, context: any): CFunction {

  let newConstruct: Function = function(name: string) {
    console.log("New constructor");
    this.name = name;
    this.password = "1234567890";

    this.printName = function() : void {
      console.log(this.name, this.password);
    }
  }

  return <CFunction>newConstruct;
}

@addConsole
class User {

  name: string;
  constructor(name: string) {
    this.name = name;
    console.log("Old constructor");
  }

  printName() : void {
    console.log(this.name);
  }
}

let user1 = new User('Ben');
user1.printName();



