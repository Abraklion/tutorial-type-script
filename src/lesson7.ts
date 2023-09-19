
// Пример 1

// class Human {
//
//   constructor(public age: number, public name: string) {
//     // при такой записи конструктора не надо писать
//     // this.age = age
//     // this.name = name
//     // ts все сделает за вас
//   }
//
//   getInfo() : void {
//     console.log('Name - ' + this.name)
//   }
// }
//
// class Administrator extends Human {
//   // можно не вызывать родительский конструктор
//   // ts все сделает за вас
// }
//
//
// let admin : Administrator = new Administrator(20, 'Николай')
//
// admin.getInfo()


// Пример 2

// class Human {
//
//   protected role : string
//
//   constructor(public age: number, public name: string) {
//     // при такой записи конструктора не надо писать this.age = age this.name = name
//     // ts все сделает за вас
//   }
//
//   getInfo() : void {
//     console.log('Name - ' + this.name)
//   }
// }
//
// class Administrator extends Human {
//
//   constructor(age: number, name: string, public lastname: string) {
//     super(age, name);
//   }
//
//   getInfo() {
//     super.getInfo();
//     console.log('Lastname - ' + this.name)
//   }
//
//   getRole() {
//     console.log('Role - ' + this.role)
//   }
//
//   setRole(name : string) {
//     this.role = name
//   }
// }
//
// let admin : Administrator = new Administrator(20, 'Николай', 'Кузнецов')
//
// admin.getInfo()
// admin.setRole('Админ')
// admin.getRole()


// Пример 3

abstract class Human {

  protected abstract role : string

  protected constructor(public age: number, public name: string) {

  }

  protected abstract getInfo() : void
}

class Administrator extends Human{

  protected role : string

  constructor( age: number, name: string, role : string) {
    super(age, name);
    this.role = role
  }

  getInfo() {
    console.log('Name - ' + this.name)
    console.log('Role - ' + this.role)
  }
}

let admin : Administrator = new Administrator(20, 'Николай', 'Админ')

admin.getInfo()























export {}
