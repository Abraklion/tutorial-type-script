class Human {
  name: string
  age: number

  /**
   * Конструктор
   * @param {string} name - Имя
   * @param {number} age - Возраст
   */
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

let user: Human = new Human('Николай', 30)

console.log(user)
